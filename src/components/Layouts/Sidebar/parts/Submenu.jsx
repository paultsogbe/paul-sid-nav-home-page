import React from 'react'
import "./Submenu.scss"

const Submenu = ({title, children}) => {
  return (
    <div className="submenu-sidebar">
        <h3>{title}</h3>
        {children}
    </div>
  )
}

export default Submenu