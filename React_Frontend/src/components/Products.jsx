/* eslint-disable react/prop-types */
import Product from "./Product";

export default function Products({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
      {products.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
}
