import React, { useState, useContext } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../AppContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MobileProductRow = ({ id, code, name, price }) => {
  const { productsData, isMobile, apiUrl } = useContext(AppContext);
  const [prodPrice, setProdPrice] = useState(price);
  const saveRow = async () => {
    await axios.put(`${apiUrl}/product`, {
      product: {
        id,
        code,
        name,
        price: prodPrice,
      },
    });
    window.location.reload();
  };
  const deleteRow = async () => {
    await axios.delete(`${apiUrl}/product`, {
      data: { productId: id },
    });
    window.location.reload();
  };
  return (
    <Card sx={{ minWidth: 275, margin: "10px auto" }}>
      <CardContent>
        <div style={{ display: "flex",justifyContent:"space-between" }}>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "start", width:"190px", textOverflow:"ellipsis" }}
            color="text.primary"
            
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: 13, display: "flex", justifyContent: "start" }}
            color="text.primary"
            
          >
            {code}
          </Typography>
          

        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
      <input
          style={{ width: "50px" }}
          onChange={(e) => {
            setProdPrice(e.target.value);
          }}
          value={prodPrice}
        />
        <Button onClick={saveRow}>שמור מחיר</Button>
        <div
          onClick={deleteRow}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Button> מחק מוצר</Button>
        </div>
      </CardActions>
    </Card>

    /* <TableCell align="right">
        <svg data-testid="DeleteIcon"></svg> 
        {<div
          onClick={deleteRow}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <DeleteIcon color={"red"} />
          <Button> מחק מוצר</Button>
        </div>
      </TableCell> */
  );
};

export default MobileProductRow;
