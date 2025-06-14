import React from 'react'
import Bookitem from './Bookitem'
import Notavlbl from '../../shared/comp/Notavlbl'
import './Booklist.css'

const Booklist = (props) => {
   
  if(props.list.length===0)
  {
    return (
        <Notavlbl message="Empty book list"/>
      )
  }
  return (
    <ul className='list'>
        {props.list.map(it=>(<Bookitem key={it.mal_id} id={it.mal_id} name={it.title_english} image={it.images.jpg.image_url} score={it.score} url={it.url}/>))}
    </ul>
  )
}

export default Booklist