/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export default function DummyData({ product }) {

    const navigate = useNavigate();

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
                className="rounded-t-lg"
                src="https://placehold.co/600x400"
                alt=""
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.Name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.CategoryName}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Product Code: {product.Code}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-through">
                    Old Price: {formatCurrency(product.OldPrice)} 
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    New Price: {formatCurrency(product.Price)} 
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.stock} {product.UnitName} Available
                </p>
            </div>
        </div>
    );
}
