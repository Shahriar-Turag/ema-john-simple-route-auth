import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user ? (
                    <button onClick={() => auth.signOut()}>Sign Out</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
