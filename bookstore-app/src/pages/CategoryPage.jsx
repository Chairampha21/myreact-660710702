import React from "react";
import { Link } from "react-router-dom";
import './style/HomePage.css';

const CategoryPage = () => {
    return (
        <div>
            <h1>Welcome to the CategoryPage</h1>
            <p>This is the home page of the CategoryPage application</p>
            <Link to="/about">Go to Book List</Link>
        </div>
    );
};

export default CategoryPage;