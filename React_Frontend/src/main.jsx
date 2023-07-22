import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductEdit from "./components/ProductEdit";
import Create from "./components/Create";
import Nav from "./components/Nav";
import DummyDatas from "./components/DummyDatas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/edit/:productId",
    element: <ProductEdit />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/DummyDatas",
    element: <DummyDatas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
