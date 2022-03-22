import React from "react";
import {Link} from "react-router-dom";
import {isUserLoggedIn, logout} from "../apis/authApi";

const Header = () => {

    console.log(isUserLoggedIn());

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <p className="navbar-brand text-center text-align-center">React Jwt Project</p>
            </nav>
            <ul className="navbar-nav navbar-collapse justify-content-end">
                {!isUserLoggedIn() && <li><Link className="nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn() && <li><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
                {isUserLoggedIn() && <li><Link className="nav-link" to="/listboard">ListBoard</Link></li>}
            </ul>
        </header>
    );
};

export default Header;