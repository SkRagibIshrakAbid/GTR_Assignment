/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://localhost:7474";

export default function Product({ product }) {
  const deleteProduct = async () => {
    await fetch(`${baseUrl}/api/Products/DeleteProduct/${product.productId}`, {
      method: "DELETE",
    });
    navigate(0);
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`/details/${product.productId}`}>
        <img
          className="rounded-t-lg"
          src="https://placehold.co/600x400"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={`/details/${product.productId}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.quantityInStock} left in stock
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {formatCurrency(product.price)}
        </p>
        <a
          href={`/edit/${product.productId}`}
          className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </a>
        <button
          onClick={deleteProduct}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
