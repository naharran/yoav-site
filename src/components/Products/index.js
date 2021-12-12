import React from "react";
import ProductsTable from "../ProductsTable";
import NewProductForm from "../NewProductForm";
const Products = () => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <ProductsTable />
      <div dir={"rtl"} style={{marginTop:"100px", width:"100%"}}>
        <NewProductForm />
      </div>
    </div>
  );
};
export default Products;
