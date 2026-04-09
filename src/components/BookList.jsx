import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function BookList({
books,
setBooks,
filter,
likesSort,
priceSort,
cart,
setCart,
}) {
const [data, setData] = useState([]);

useEffect(() => {
let temp = [...books];

```
// FILTER
if (filter !== "all" && filter !== "") {
  temp = temp.filter((b) => b.category === filter);
}

// SORT BY LIKES
if (likesSort === "htl") {
  temp.sort((a, b) => b.likes - a.likes);
} else if (likesSort === "lth") {
  temp.sort((a, b) => a.likes - b.likes);
}

// SORT BY PRICE
if (priceSort === "htlp") {
  temp.sort((a, b) => b.price - a.price);
} else if (priceSort === "lthp") {
  temp.sort((a, b) => a.price - b.price);
}

setData(temp);
```

}, [books, filter, likesSort, priceSort]);

// DELETE BOOK
const handleDelete = (id) => {
const updatedBooks = books.filter((b) => b.id !== id);
setBooks(updatedBooks);
localStorage.setItem("books", JSON.stringify(updatedBooks));
};

// ADD TO CART
const addToCart = (book) => {
const existing = cart.find((item) => item.id === book.id);

```
if (existing) {
  const updatedCart = cart.map((item) =>
    item.id === book.id
      ? { ...item, qty: item.qty + 1 }
      : item
  );
  setCart(updatedCart);
} else {
  setCart([...cart, { ...book, qty: 1 }]);
}
```

};

return ( <div className="container">
{data.map((book) => ( <div className="cards" key={book.id}>

```
      <div className="img">
        <img src={`/${book.image}`} alt={book.title} />

        <p className="likes-text">
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {book.likes}
        </p>
      </div>

      <div className="card-content">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <p>{book.description}</p>
        <p className="price">Rs.{book.price}</p>

        <div className="card-actions">
          <button onClick={() => addToCart(book)}>
            <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
          </button>

          <button onClick={() => handleDelete(book.id)}>
            Delete
          </button>
        </div>
      </div>

    </div>
  ))}
</div>

);
}

BookList.propTypes = {
books: PropTypes.array.isRequired,
setBooks: PropTypes.func.isRequired,
filter: PropTypes.string,
likesSort: PropTypes.string,
priceSort: PropTypes.string,
cart: PropTypes.array.isRequired,
setCart: PropTypes.func.isRequired,
};

export default BookList;
