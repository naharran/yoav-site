import React,{useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MobileProductRow from "./ProductRow";
import { AppContext } from "../AppContext";

const MobileTable = () => {
    const { productsData, isMobile } = useContext(AppContext);

  return (
    <Table dir={"rtl"} sx={{ width:"90%"}}  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }} align="right">
            שם מוצר
          </TableCell>
          <TableCell style={{ fontWeight: "bold" }} align="right">
            מחיר
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {productsData.length ? (
          productsData.map((row) => (
            <MobileProductRow
              id={row.id}
              price={row.price}
              code={row.code}
              name={row.name}
            />
          ))
        ) : (
          <> </>
        )}
      </TableBody>
    </Table>
  );
};

export default MobileTable;
