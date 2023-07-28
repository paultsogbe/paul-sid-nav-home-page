import React from 'react'
import "./Navbar.scss"
import User from './parts/User'
import Search from './parts/Search'
import Online from './parts/Online'
import Notification from './parts/Notification'

const Navbar = () => {
  return (
    <div className="navbar-main">
        <div className="left">
            <User />
            <div className="separator" />
            <Search />
        </div>
        <div className="right">
            <Online />
            <div className="separator" />
            <Notification notification={1} />
        </div>
    </div>
  )
}

export default Navbar