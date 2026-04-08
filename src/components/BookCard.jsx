import React from "react";
import "./BookCard.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function BookCard({ book }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={book.image} alt="" />
        <div className="likes">
          <p className="likes-text">
  <span>
    <FontAwesomeIcon icon={faHeart} />
  </span>
  {book.likes}
</p>
        </div>
      </div>

      <div className="details">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="desc">{book.description}</p>
        <p className="price">₹{book.price}</p>
      </div>
    </div>
  );
}

export default BookCard;