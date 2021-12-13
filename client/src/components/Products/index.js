import React from "react";
import ProductsTable from "../ProductsTable";
import NewProductForm from "../NewProductForm";
const Products = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <ProductsTable/>
    </div>
  );
};
export default Products;
