import React from 'react'
import { NavLink } from 'react-router-dom'
import './Item.css'

const Item = () => {
  return (
    <ul className='MLIulist'>
        <li className='MLIitem'>
            <NavLink to="/" exact>
                <h5>TopAnime</h5>
            </NavLink>
        </li>
        <li className='MLIitem'>
            <NavLink to="/char" exact>
                <h5>TopChar</h5>
            </NavLink>
        </li>
    </ul>
  )
}

export default Item