import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="p-2 navbar-brand ">BLOG POST APP</Link>
        </nav>
    );
    
};

export default Navbar;