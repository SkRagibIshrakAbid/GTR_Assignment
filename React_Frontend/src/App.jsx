import { useState, useEffect } from "react";
import Products from "./components/Products";

const baseUrl = "https://localhost:7474";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${baseUrl}/api/Products/GetProducts`);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (<div>
    <Products products={products} />
  </div>);
}

export default App;
