import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { setFilter, setLikesSort, setPriceSort, cartCount } = this.props;

    return (
      <div className="nav-bar">

        {/* TITLE */}
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <div className="title-box">
            <p className="title-name">
              <span>
                <FontAwesomeIcon icon={faBook} />
              </span>
              BookStore
            </p>
          </div>
        </Link>

        {/* NAV CONTENT */}
        <div className="content">

          {/* ALL BOOKS */}
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="box" onClick={() => setFilter("all")}>
              All books
            </div>
          </Link>

          {/* CATEGORY */}
          <select className="box" onChange={(e) => setFilter(e.target.value)}>
            <option value="select-category">select-category</option>
            <option value="history">History</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
          </select>

          {/* LIKES */}
          <select className="box" onChange={(e) => setLikesSort(e.target.value)}>
            <option value="">Likes</option>
            <option value="htl">High To Low Likes</option>
            <option value="lth">Low To High Likes</option>
          </select>

          {/* PRICE */}
          <select className="box" onChange={(e) => setPriceSort(e.target.value)}>
            <option value="">Price</option>
            <option value="htlp">High To Low Price</option>
            <option value="lthp">Low To High Price</option>
          </select>

          {/* ADD BOOK */}
          <Link to="/add" style={{ textDecoration: "none" }}>
            <div className="box">Add Book</div>
          </Link>

          {/* CART */}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="box">
              <FontAwesomeIcon icon={faCartShopping} /> ({cartCount})
            </div>
          </Link>

        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setLikesSort: PropTypes.func.isRequired,
  setPriceSort: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;