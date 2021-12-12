import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

const NewProductForm = () => {
  const formik = useFormik({
    initialValues: {
      id: "9",
      price: "180",
      name: "מוצר חדש",
      code: "ברקוד",
    },
    validationSchema: null,

    onSubmit: (values) => {
      
    },
  });
  console.log({formik})
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
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
        <Button type={"submit"} submit>{"שמור מוצר"}</Button>
      </form>
    </div>
  );
};

export default NewProductForm;
