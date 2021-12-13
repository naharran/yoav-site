import React, { useContext, useState, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import { AppContext } from "../AppContext";
import { Typography } from "@mui/material";

const NewProductForm = ({ product }) => {
  const { isMobile, apiUrl } = useContext(AppContext);
  
  const formik = useFormik({
    initialValues: product,
    validationSchema: null,

    onSubmit: async (values) => {
      const productForm = values;
      const res = await axios.post(`${apiUrl}/product`, {
        product: productForm,
      });
      window.location.reload(false);
    },
  });

  return product ? (
    <div
      dir="rtl"
      style={{
        display: "flex",
        borderRadius: "30px",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        width: isMobile ? "unset" : "60%",
        backgroundColor: "white",
        margin: "auto",
      }}
    >
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "start" }}
      >
        <Typography>הוסף פריט לרשימה</Typography>
      </div>
      <form
        dir="rtl"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
        onSubmit={formik.handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <TextField
            style={{ margin: "10px" }}
            id="outlined-basic"
            disabled
            value={formik.values.id}
            label="מסד"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            value={formik.values.code}
            onChange={formik.handleChange}
            name="code"
            id="outlined-basic"
            label="ברקוד"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            id="outlined-basic"
            label="שם מוצר"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            value={formik.values.price}
            onChange={formik.handleChange}
            name="price"
            id="outlined-basic"
            label="מחיר"
            variant="outlined"
          />
        </div>
        <Button
          style={{ display: "flex", width:"fit-content", justifyContent: "start" }}
          type={"submit"}
          submit
          contained
          color="success"
        >
          {"שמור מוצר"}
        </Button>
      </form>
    </div>
  ) : (
    <></>
  );
};

export default NewProductForm;
