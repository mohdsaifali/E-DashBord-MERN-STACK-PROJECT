import React from 'react'
import { Link, useNavigate } from "react-router-dom"
function Nav() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img className='logo' src='https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854' alt='logo' />
      {auth ? <ul className='nav-ul'>
        <li> <Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li> <Link to="/update">Update Products</Link></li>
        <li> <Link to="/profile">Profile</Link></li>
        <li> <Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link> </li>

      </ul>
        :
        <ul className='nav-ul nav-right'>
          <li> <Link to="/signup">Sign Up</Link></li>
          <li> <Link to="/login">Log In </Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav