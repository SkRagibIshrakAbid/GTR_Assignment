import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://localhost:7474";

export default function ProductEdit() {
    const { productId } = useParams();
    const [values, setValues] = useState(null);
    const navigate = useNavigate();
  
    const updateProduct = async (e) => {
      e.preventDefault();
      await fetch(`${baseUrl}/api/Products/UpdateProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...values,productId:productId}),
      });
      navigate(`/details/${productId}`);
    };
  
    useEffect(() => {
      const getProduct = async () => {
        const response = await fetch(
          `${baseUrl}/api/Products/GetProduct/${productId}`
        );
        const data = await response.json();
        setValues(data);
      };
  
      getProduct();
    }, [productId]);
  
    if (!values) {
      return null;
    }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Edit Product</h1>
      </div>

      <form
        onSubmit={updateProduct}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              defaultValue={values.name}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="price" className="sr-only">
            Price
          </label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              defaultValue={values.price}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, price: parseFloat(event.target.value) }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="desc" className="sr-only">
            Description
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              defaultValue={values.description}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, description: event.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="sr-only">
            Quantity
          </label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              defaultValue={values.quantityInStock}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, quantityInStock: parseFloat(event.target.value) }))
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between">

          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
