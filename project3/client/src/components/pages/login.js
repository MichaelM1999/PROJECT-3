import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './account';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
                <div>
                    Welcome To StockSim!
                </div>
                <div>
                    <input type="text" placeholder="User Name"></input>
                    <input type="text" placeholder="Password"></input>
                    <input type="submit" value="submit"></input>
                    <Link
                        to="/account"
                        className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"}
                        >
                        Don't have an account?
                    </Link>
                </div>
        </div>

    )

}

export default Login;