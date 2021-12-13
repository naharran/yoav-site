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
    <>{isMobile ? <MobileTable /> : <DesktopTable />}</>
  ) : (
    <h1>loading</h1>
  );
};
export default ProoductsTable;
