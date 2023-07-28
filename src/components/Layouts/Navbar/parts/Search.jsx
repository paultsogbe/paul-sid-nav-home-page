import React from 'react'
import './Search.scss'
import { Search2Icon } from '../../../../theme/Icons'

const Search = () => {
  return (
    <div className="navbar-search">
      <Search2Icon />
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Search