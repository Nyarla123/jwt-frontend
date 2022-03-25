import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {isUserLoggedIn} from "../apis/authApi";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {isUserLoggedIn &&
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/login"
                        >
                            login
                        </NavLink>
                    </li>}
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/logout"
                        >
                            logout
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/listboard"
                        >
                            listBoard
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;