import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MobileProductRow from "./MobileProductRow";
import { AppContext } from "../AppContext";

const MobileTable = () => {
  const { productsData, isMobile } = useContext(AppContext);

  return productsData.length ? (
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
  );
};

export default MobileTable;
