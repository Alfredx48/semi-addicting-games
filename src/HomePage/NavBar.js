import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
//   };

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          activeStyle={{
            background: "lightblue",
          }}
        >
          HomePage
        </NavLink>
        <NavLink
          to="/tic_tac_toe"
          exact
          activeStyle={{
            background: "lightblue",
          }}
        >
          TicTacToe
        </NavLink>
      </div>
    );
  }
  export default NavBar