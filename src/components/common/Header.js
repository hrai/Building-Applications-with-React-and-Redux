import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#f15b2a" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle} exact>About</NavLink>
        </nav>
    )
}

export default Header;