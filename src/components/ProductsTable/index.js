import React from "react";
import ProductsData from "./ProductsData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductRow from "./ProductRow";

const ProoductsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table dir={"rtl"} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">מסד</TableCell>
            <TableCell align="right">ברקוד</TableCell>
            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="right">מחיר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductsData.map((row) => (
            <ProductRow
              id={row.id}
              price={row.price}
              code={row.code}
              name={row.name}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProoductsTable;
