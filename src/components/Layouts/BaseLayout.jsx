import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

import "./BaseLayout.scss"
import Navbar from './Navbar/Navbar'

const BaseLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      
      <div className="content-main">
        <Outlet />
      </div>
    </>
  )
}

export default BaseLayout