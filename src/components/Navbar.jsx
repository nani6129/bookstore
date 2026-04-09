import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "all",
    };
  }

  handleFilter = (value) => {
    this.setState({ active: value });
    this.props.setFilter(value);
    if (value === "all") {
    this.props.setLikesSort("");
    this.props.setPriceSort("");
  }
  };

  render() {
    const { setLikesSort, setPriceSort, cartCount } = this.props;
    const { active } = this.state;

    return (
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/home" className="logo">
          <FontAwesomeIcon icon={faBook} className="logo-icon" />
          <span>BookStore</span>
        </Link>

        {/* MENU */}
        <div className="nav-actions">
          
          {/* ALL BOOKS */}
          <button
            className={`nav-btn ${active === "all" ? "active" : ""}`}
            onClick={() => this.handleFilter("all")}
          >
            All Books
          </button>

          {/* CATEGORY */}
          <select
            className="nav-select"
            value={active}
            onChange={(e) => this.handleFilter(e.target.value)}
          >
            <option value="all">category</option>
            <option value="history">History</option>
<option value="comedy">Comedy</option>
<option value="romance">Romance</option>
<option value="sci-fi">Sci-Fi</option>
<option value="horror">Horror</option>
<option value="entreprenuership">Entrepreneurship</option>
          </select>

          {/* LIKES */}
          <select
            className="nav-select"
            onChange={(e) => setLikesSort(e.target.value)}
          >
            <option value="">Likes</option>
            <option value="htl">High → Low</option>
            <option value="lth">Low → High</option>
          </select>

          {/* PRICE */}
          <select
            className="nav-select"
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="">Price</option>
            <option value="htlp">High → Low</option>
            <option value="lthp">Low → High</option>
          </select>

          {/* ADD BOOK */}
          <Link to="/add">
            <button className="add-btn">+ Add Book</button>
          </Link>

          {/* CART */}
          <Link to="/cart" className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
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