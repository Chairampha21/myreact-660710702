import React from "react";
import { Link } from "react-router-dom";
import './style/HomePage.css';

const ContactPage = () => {
    return (
        <div>
            <h1>Welcome to the ContactPage</h1>
            <p>This is the ContactPage of the bookstore application</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    );
};

export default ContactPage;