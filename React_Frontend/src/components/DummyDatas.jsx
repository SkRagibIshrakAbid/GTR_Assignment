import { useState, useEffect } from "react";
import DummyData from "./DummyData";


function DummyDatas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://www.pqstec.com/InvoiceApps/values/GetProductListAll`);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (<div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
      {products.map((product) => (
        <DummyData key={product.productId} product={product} />
      ))}
    </div>
  </div>);
}

export default DummyDatas;
