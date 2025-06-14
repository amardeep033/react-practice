import React from 'react'
import './header.css'

const Header = (props) => {
  return (
    <div className='header'>
      <div className='title'>
        <h1>MY LIBRARY</h1>
      </div>

      <div className='filter'>
        <label for="search">TITLE:</label>
        <input type="text" id="search" placeholder="Enter Title" name="name" value={props.searchQuery.name} onChange={props.handleSearch} />
        <label for="search2">AUTHOR:</label>
        <input type="text" id="search2" placeholder="Enter Author" name="author" value={props.searchQuery.author} onChange={props.handleSearch} />
        <label for="search3">SUBJECT:</label>
        <select name="subject" id="search3" onChange={props.handleSearch}>
          <option value="">All</option>
          {props.dropdown.map(it => (<option value={it}>{it}</option>))}
        </select>
      </div>
    </div>
  )
}

export default Header