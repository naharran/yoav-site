import React, { useState,useContext } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {AppContext} from "../AppContext"
const ProductRow = ({ id, code, name, price }) => {
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
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/* <TableCell component="th" scope="row">
          {row.name}
        </TableCell> */}
      <TableCell align="right">{Number(id)}</TableCell>
      <TableCell align="right">{code}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        <input
          onChange={(e) => {
            setProdPrice(e.target.value);
          }}
          value={prodPrice}
        />
      </TableCell>
      <TableCell align="right">
        <Button onClick={saveRow}>שמור מחיר</Button>
      </TableCell>
      <TableCell align="right">
        {/* <svg data-testid="DeleteIcon"></svg> */}
        <div onClick={deleteRow} style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
          <DeleteIcon  color={"red"} />
          <Button> מחק מוצר</Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
