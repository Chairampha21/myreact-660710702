import React from "react";
import { Link } from "react-router-dom";
import './style/HomePage.css';

const AboutPage = () => {
    return (
        <div>
            <h1>Welcome to the AboutPage</h1>
            <p>This is the AboutPage of the bookstore application</p>
            <Link to="/contact">Go to Book List</Link>
        </div>
    );
};

export default AboutPage;