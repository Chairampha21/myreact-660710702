import React from "react";
import { Link } from "react-router-dom";
import './style/HomePage.css';

const BookListPage = () => {
    return (
        <div>
            <h1>Welcome to the BookListPage</h1>
            <p>This is the BookListPage of the bookstore application</p>
            <Link to="/category/fiction">Go to Book List</Link>
        </div>
    );
};

export default BookListPage;