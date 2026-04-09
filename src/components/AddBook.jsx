import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook({ books, setBooks,setFilter }) {
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
      alert("Fill all fields");
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

    alert("Book Added!");
    setFilter("all");
    navigate("/"); // ✅ go back to home
  };

  return (
    <div className="form-container" style={{ display: "block" }}>
      <h1>Add a New Book</h1>

      <form onSubmit={handleSubmit} className="add-book-form">
        <input name="image" placeholder="Image file name" onChange={handleChange} /><br /><br />
        <input name="title" placeholder="Title" onChange={handleChange} /><br /><br />
        <input name="author" placeholder="Author" onChange={handleChange} /><br /><br />
        <input name="price" placeholder="Price" onChange={handleChange} /><br /><br />
        <input name="likes" placeholder="Likes" onChange={handleChange} /><br /><br />

        <textarea name="description" placeholder="Description" rows="10" cols="30" onChange={handleChange}></textarea><br /><br />

        <select name="category" onChange={handleChange} className="book-category">
          <option value="">Select Category</option>
          <option value="history">History</option>
          <option value="comedy">Comedy</option>
          <option value="romance">Romance</option>
        </select><br /><br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;