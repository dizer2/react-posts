import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
	<div className="navbar">
		<div className="navbar__links">
			<Link to="/posts">Home</Link>
			<Link to="/about">About</Link>
		</div>
  </div>
  )
}

export default Navbar;