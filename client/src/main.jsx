import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./pages/shop.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Rootlayout from "./components/Rootlayout.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import SingleProduct from "./components/SingleProduct.jsx";
import Card from "./pages/Card.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Otpverify from "./pages/Otpverify.jsx";
import store from "../store.js";
import { Provider } from "react-redux";
import Success from "./pages/success.jsx";
import Failed from "./pages/Failed.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otpverify />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
