import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./AddBook.css";
function AddBook({ books, setBooks, showToast }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    image: "",
    title: "",
    author: "",
    price: "",
    likes: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((val) => val === "")) {
      showToast("Please fill all fields ⚠️", "error");
      return;
    }

    const newBook = {
      ...form,
      id: books.length + 1,
      price: Number(form.price),
      likes: Number(form.likes),
    };

    const updated = [...books, newBook];
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));

    showToast("Book added successfully 🎉");

    navigate("/home"); // better route
  };

  return (
    <div className="form-container">
      <h1>Add a New Book</h1>

      <form onSubmit={handleSubmit} className="add-book-form">

        <input
          name="image"
          placeholder="📷 Image file name"
          onChange={handleChange}
        />

        <input
          name="title"
          placeholder="📖 Title"
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="✍️ Author"
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="💰 Price"
          onChange={handleChange}
        />

        <input
          name="likes"
          placeholder="❤️ Likes"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="📝 Description"
          rows="5"
          onChange={handleChange}
        />

        <select
          name="category"
          onChange={handleChange}
          className="book-category"
        >
          <option value="">📚 Select Category</option>
          <option value="history">History</option>
          <option value="comedy">Comedy</option>
          <option value="romance">Romance</option>
        </select>

        <button type="submit">🚀 Add Book</button>
      </form>
    </div>
  );
}

AddBook.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  showToast: PropTypes.func.isRequired,
};

export default AddBook;