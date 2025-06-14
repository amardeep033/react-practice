import React from 'react'
import './Bookitem.css'
import Card from '../../shared/comp/Card'
import { Link } from 'react-router-dom'

const Bookitem = (props) => {
  console.log(props.url)
  return (
    <li className='item'>
      <Card>

        <div>
          <div className='card_name'>{props.name}</div>
          <a href={props.url} target="_blank">
            <div className='photo'>
              <img src={props.image} alt={props.name}></img>
            </div>
          </a>
          <div className='card_score'>{props.score}</div>
        </div>
      </Card>
    </li>
  )
}

export default Bookitem