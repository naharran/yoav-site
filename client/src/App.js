import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import bg from "./bg-naknik.jpeg";
import { AppContext, apiUrl } from "./components/AppContext/index";
function App() {
  const [productsData, setProductsData] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const getData = async () => {
    const res = await axios.get(`${apiUrl}/products`);
    console.log(res);
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
    window.addEventListener("resize", () => {
      getIsMobile();
    });
  });

  return (
    <AppContext.Provider value={{ isMobile, productsData,apiUrl }}>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="App"
      >
        <div style={{ paddingTop: "100px" }}>
          <Products />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
