import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import Form from "./pages/form/Form.jsx";
import Calender from "./pages/calender/Calender.jsx";
import Faq from "./pages/faq/Faq.jsx";
import { BarChart } from "./pages/barChart/BarChart.jsx";
import PieChart from "./pages/pieChart/PieChart.jsx";
import LineChart from "./pages/lineChart/LineChart.jsx";
import GeographyChart from "./pages/geographyChart/GeographyChart.jsx";
import Products from "./pages/products/Products.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="products" element={<Products />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
