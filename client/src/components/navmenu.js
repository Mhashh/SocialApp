import React from 'react'
import {Link} from 'react-router-dom'
//navigation bar
function NavMenu() {
  return (
    <div className="navMenu">
      <li><Link to="/signin">signin</Link></li>
      <li><Link to="/signup">signup</Link></li>
    </div>
  );
}

export default NavMenu;
