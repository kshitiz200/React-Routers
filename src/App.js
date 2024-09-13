import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Admin } from "./components/Admin";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { OrderSummary } from "./components/OrderSummary";
import { UserDetails } from "./components/UserDetails";
import { Userss } from "./components/Userss";
import { NoMatch } from "./components/NoMatch";
const LazyAbout = React.lazy(() => import("./components/About"));

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Userss />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
