import React from 'react'
import Modal from './Modal'
import Item from './Item'
import { Link } from 'react-router-dom'
import './List.css'

const item = () => {
  return (
    <Modal>
        <h1 className='MLheading'>
            <Link to='/'>
                MyAnimeList
            </Link>
        </h1>
        <nav className='MLlist'>
            <Item/>
        </nav>
    </Modal>
  )
}

export default item