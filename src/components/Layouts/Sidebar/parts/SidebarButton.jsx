import React from 'react'
import "./SidebarButton.scss"

const SidebarButton = ({Icon, title, notification}) => {
  return (
    <div className="sidebar-button">
        <div className="left">
          <Icon fill="none" />
          {title}
        </div>

        {
          notification &&
          <div className="right">
            {notification}
          </div>
        }

    </div>
  )
}

export default SidebarButton