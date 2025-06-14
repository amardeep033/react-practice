import React from 'react'
import './Bookitem.css'
import Card from './Card'

const Bookitem = (props) => {
    return (
        <li className='item'>
            <Card>
                <div>
                    <div className='card_id'>Book_Id: {props.id}</div>
                    <div className='card_name'>Title: {props.name}</div>
                    <div className='photo'>
                        <img src={props.image} alt={props.name}></img>
                    </div>
                    <div className='card_author'>Author: {props.author}</div>
                    <div className='card_subject'>Subject: {props.subject}</div>
                    <div className='card_date'>Date: {props.date}</div>
                </div>
            </Card>
        </li>
    )
}

export default Bookitem