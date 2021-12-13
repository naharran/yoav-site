import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import bg from "./bg-naknik.jpeg";
import { AppContext, apiUrl } from "./components/AppContext/index";
import NewProductForm from "./components/NewProductForm";

function App() {
  const [productsData, setProductsData] = useState();
  const [product, setProduct] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const getData = async () => {
    const res = await axios.get(`${apiUrl}/products`);
    console.log(res.data);
    setProductsData(res.data);
  };
  const getIsMobile = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else setIsMobile(false);
  };
  useEffect(() => {
    getData();
    getIsMobile();
  }, []);

  useEffect(() => {
    if (productsData) {
      const product = {
        id:
          productsData && productsData.length > 0
            ? Number(productsData[productsData.length - 1].id) + 1
            : 1,
        price: "180",
        name: "מוצר חדש",
        code: "1890234",
      };
      setProduct(product);
    }
  }, [productsData]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      getIsMobile();
    });
  });

  return (
    <AppContext.Provider value={{ isMobile, productsData, apiUrl }}>
      <div
        style={{
          backgroundImage: `url(${bg}), url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: isMobile ? "1000px" : "100vh",
        }}
        dir="rtl"
        className="App"
      >
        <div
          style={{
            paddingTop: "100px",
            overflow: "scroll",
            height: "50vh",
            marginBottom: "50px",
          }}
        >
          <Products />
        </div>
        {product && (
          <div style={{ width: "75%", margin: "auto" }}>
            <NewProductForm product={product} />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
