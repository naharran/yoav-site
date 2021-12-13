import React, { useContext } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import { AppContext } from "../AppContext";

const NewProductForm = ({ product }) => {
  const { productsData, isMobile, apiUrl } = useContext(AppContext);
  console.log({isMobile})
  const formik = useFormik({
    initialValues: product,
    validationSchema: null,

    onSubmit: async (values) => {
      const product = values;
      const res = await axios.post(`${apiUrl}/product`, {
        product,
      });
      window.location.reload(false);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
        onSubmit={formik.handleSubmit}
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
          labelAlign="right"
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
        <Button type={"submit"} submit>
          {"שמור מוצר"}
        </Button>
      </form>
    </div>
  );
};

export default NewProductForm;
