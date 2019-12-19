import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#f15b2a" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle} exact>About</NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses</NavLink>
        </nav>
    )
}

export default Header;