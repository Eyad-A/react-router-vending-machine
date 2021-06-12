import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">
                Home 
            </NavLink>
            <NavLink exact to="/Chips">
                Chips 
            </NavLink>
            <NavLink exact to="/Candy">
                Candy  
            </NavLink>
            <NavLink exact to="/Soda">
                Soda  
            </NavLink>
        </nav>
    );
}

export default NavBar;