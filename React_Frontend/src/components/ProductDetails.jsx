import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://localhost:7474";

export default function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const deleteProduct = async () => {
    await fetch(`${baseUrl}/api/Products/DeleteProduct/${product.productId}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${baseUrl}/api/Products/GetProduct/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };

    getProduct();
  }, [productId]);

  if (!product) {
    return null;
  }

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt={product.name}
              src="https://placehold.co/600x400"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>

          <div className="sticky top-0">
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {product.name}
                </h1>

                <p className="text-sm">
                  {product.quantityInStock} left in stock
                </p>
              </div>

              <p className="text-lg font-bold">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-2">
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
        </div>
      </div>
    </section>
  );
}
