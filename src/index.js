import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import CheckOutPage from "./components/checkoutpage/CheckOutPage";
import Account from "./components/account/Account";
import ProductDetailsPage from "./components/productdetailspage/ProductDetailsPage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/errorpage/ErrorPage";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Wishlist from "./components/wishlist/Wishlist";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<CheckOutPage/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/productdetails" element={<ProductDetailsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
