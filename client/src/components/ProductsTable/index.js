import React, { useContext } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import NewProductForm from "../NewProductForm";
import { AppContext } from "../AppContext";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

const ProoductsTable = () => {
  const { productsData, isMobile } = useContext(AppContext);
  return productsData ? (
    <TableContainer component={Paper}>
      {isMobile ? <MobileTable /> : <DesktopTable />}
      <div
        dir={"rtl"}
        style={{
          margin: "50px auto",
          width: "90%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NewProductForm
          product={{
            id:
              productsData.length > 0
                ? Number(productsData[productsData.length - 1].id) + 1
                : 1,
            price: "180",
            name: "מוצר חדש",
            code: "1890234",
          }}
        />
      </div>
    </TableContainer>
  ) : (
    <h1>loading</h1>
  );
};
export default ProoductsTable;
