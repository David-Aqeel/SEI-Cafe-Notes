import './NavBar.css';

import React from "react";
// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'



export default function NavBar({ user, setUser }) {
  // console.log('this is setUser in Nav', setUser)
  function handleLogOut() {
    // delete the token from storage
    userService.logOut()
    // set the user to null
    setUser(null)
  }

  return (
    <nav className="nav-buttons">
      {/* <Link to="/" className="buton btn-nav"> Home</Link>
      &nbsp; | &nbsp; */}
      <Link to="/orders" className="buton btn-nav">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new" className="buton btn-nav">New Order</Link>
      &nbsp; | &nbsp;
      {/* <span>Welcome, {user.name}</span>
      &nbsp;&nbsp; */}
      <Link to="" onClick={handleLogOut} className="buton btn-nav">Log Out</Link>
      <h3> Hello {user.name}!</h3>
    </nav>
  );
}