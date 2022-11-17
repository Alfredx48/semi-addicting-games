import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
    borderRadius: "10px",
  };

export const NotFound  = () => {
  return (
    <div>
        {/* <h1> 404 NotFound </h1>
        <h4>You Have Gone To Far</h4> */}
        <NavLink exact to="/" style={linkStyles} className="links">Return to HomePage</NavLink>
    </div>
    
  )
}
export default NotFound