import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Cart from "./components/Cart";
import Splash from "./components/Splash";
import booksData from "./data/books";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);
  const [filter, setFilter] = useState("all");
  const [likesSort, setLikesSort] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>

        {/* REDIRECT ROOT */}
        <Route path="/" element={<Navigate to="/splash" />} />

        {/* SPLASH */}
        <Route path="/splash" element={<Splash />} />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <>
              <Navbar
                setFilter={setFilter}
                setLikesSort={setLikesSort}
                setPriceSort={setPriceSort}
                cartCount={cart.length}
              />
              <BookList
                books={books}
                setBooks={setBooks}
                filter={filter}
                likesSort={likesSort}
                priceSort={priceSort}
                cart={cart}
                setCart={setCart}
              />
            </>
          }
        />

        {/* ADD BOOK */}
        <Route
          path="/add"
          element={
            <>
              <Navbar
                setFilter={setFilter}
                setLikesSort={setLikesSort}
                setPriceSort={setPriceSort}
                cartCount={cart.length}
              />
              <AddBook books={books} setBooks={setBooks} />
            </>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar
                setFilter={setFilter}
                setLikesSort={setLikesSort}
                setPriceSort={setPriceSort}
                cartCount={cart.length}
              />
              <Cart cart={cart} setCart={setCart} />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;