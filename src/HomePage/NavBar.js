import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightgreen",
    textDecoration: "none",
    color: "white",
    borderRadius:"10px"
  };

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "pink",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/tic_tac_toe"
          exact
          style={linkStyles}
          activeStyle={{
            background: "pink",
          }}
        >
          TicTacToe
        </NavLink>
        <NavLink
          to="/hangman"
          exact
          style={linkStyles}
          activeStyle={{
            background: "pink",
          }}
        >
          HangMan
        </NavLink>
      </div>
    );
  }
  export default NavBar