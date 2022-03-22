import React,{Fragment, useEffect} from "react";

import {logout} from "../apis/authApi";
import styles from '../styles/Logout.module.css';

const Logout = () => {

    useEffect(() => {
        logout();
    });

    return (
        <div className={styles.logout}>
            <h1>You are logged out</h1>
            <div className="container">
                Thank You for Using Our Application.
            </div>
        </div>
    );
};

export default Logout;
