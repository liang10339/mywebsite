import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css"


const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <span className="logo" > YuLiang </span>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item" >
                            <Link className="nav-link " to="/about" >About</Link> 
                         {/* <a href="/about" className="nav-link"> About </a>  */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">
                            Resume
                        </Link>
                        {/* <a href="/resume" className="nav-link"> Resume </a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">
                            Portfolio
                        </Link>
                        {/* <a href="/portfolio" className="nav-link"> Portfolio </a> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export { Navbar };