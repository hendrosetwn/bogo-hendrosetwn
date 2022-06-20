import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCategory from "./pages/DetailCategory";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import {
  getBoots,
  getIconCol,
  getMenPants,
  getMenSweater,
  getMenTSHIRT,
  getSale,
  getSandals,
  getSneakers,
  getWatches,
  getWomPants,
  getWomShirts,
  getWomSweaters,
  getWomTSHIRT,
} from "./services/DataFilterCategory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/category/men-sweater"
          element={
            <DetailCategory
              data={getMenSweater}
              gender="MEN"
              product="SWEATERS"
            />
          }
        />
        <Route
          path="/category/men-pants"
          element={
            <DetailCategory data={getMenPants} gender="MEN" product="PANTS" />
          }
        />
        <Route
          path="/category/men-tshirt"
          element={
            <DetailCategory
              data={getMenTSHIRT}
              gender="MEN"
              product="T-SHIRT"
            />
          }
        />

        <Route
          path="/category/women-tshirts"
          element={
            <DetailCategory
              data={getWomTSHIRT}
              gender="WOMEN"
              product="T-SHIRT"
            />
          }
        />
        <Route
          path="/category/men-watch"
          element={
            <DetailCategory data={getWatches} gender="MEN" product="WATCHES" />
          }
        />
        <Route
          path="/category/women-pants"
          element={
            <DetailCategory data={getWomPants} gender="WOMEN" product="PANTS" />
          }
        />
        <Route
          path="/category/women-sandals"
          element={
            <DetailCategory
              data={getSandals}
              gender="WOMEN"
              product="SANDALS"
            />
          }
        />
        <Route
          path="/category/women-short"
          element={
            <DetailCategory
              data={getSandals}
              gender="WOMEN"
              product="SANDALS"
            />
          }
        />
        <Route
          path="/category/women-shirts"
          element={
            <DetailCategory
              data={getWomShirts}
              gender="WOMEN"
              product="SHIRTS"
            />
          }
        />
        <Route
          path="/category/women-sweater"
          element={
            <DetailCategory
              data={getWomSweaters}
              gender="WOMEN"
              product="SWEATERS"
            />
          }
        />
        <Route
          path="/category/all-sale"
          element={
            <DetailCategory data={getSale} gender="ALL" product="SALE" />
          }
        />
        <Route
          path="/category/shoes-sneakers"
          element={
            <DetailCategory
              data={getSneakers}
              gender="ALL"
              product="SNEAKERS"
            />
          }
        />
        <Route
          path="/category/shoes-boots"
          element={
            <DetailCategory data={getBoots} gender="ALL" product="BOOTS" />
          }
        />
        <Route
          path="/category/icon-class"
          element={
            <DetailCategory data={getIconCol} gender="ALL" product="ICON" />
          }
        />
        <Route
          path="/products/:keywords/:slug"
          element={<ProductDetail />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
