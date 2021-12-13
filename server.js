const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 4000;
const ProductsData = require("./ProductsData.json");
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(express.static("build"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/products", (req, res) => {
  res.send(ProductsData.products);
});

app.post("/product", (req, res) => {
  const { product } = req.body;
  const ProductsData = require("./ProductsData.json");
  ProductsData.products.push(product);
  fs.writeFileSync(
    path.resolve(__dirname, "ProductsData.json"),
    JSON.stringify({ products: ProductsData.products })
  );
  res.send(ProductsData.products);
});

app.delete("/product", (req, res) => {
  const { productId } = req.body;
  console.log(productId);
  const ProductsData = require("./ProductsData.json");
  ProductsData.products = [
    ...ProductsData.products.filter((product) => product.id !== productId),
  ];

  ProductsData.products = [
    ...ProductsData.products.map((prod, index) => {
      return { ...prod, id: index + 1 };
    }),
  ];
  fs.writeFileSync(
    path.resolve(__dirname, "ProductsData.json"),
    JSON.stringify({ products: ProductsData.products })
  );
  res.send(ProductsData.products);
});

app.put("/product", (req, res) => {
  const { product } = req.body;
  console.log(product);
  const ProductsData = require("./ProductsData.json");
  ProductsData.products = [
    ...ProductsData.products.filter(
      (prod) => Number(prod.id) !== Number(product.id)
    ),
  ];
  console.log(ProductsData.products);
  ProductsData.products.push(product);
  ProductsData.products.sort((a, b) => {
    return a.id - b.id;
  });

  fs.writeFileSync(
    path.resolve(__dirname, "ProductsData.json"),
    JSON.stringify({ products: ProductsData.products })
  );
  res.send(ProductsData.products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
