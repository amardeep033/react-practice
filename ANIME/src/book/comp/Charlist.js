import React from 'react'
import Bookitem from './Bookitem'
import Notavlbl from '../../shared/comp/Notavlbl'
import './Booklist.css'

const Charlist = (props) => {
   
  if(props.list.length===0)
  {
    return (
        <Notavlbl message="Empty book list"/>
      )
  }
  return (
    <ul className='list'>
        {props.list.map(it=>(<Bookitem key={it.mal_id} id={it.mal_id} name={it.name} image={it.images.jpg.image_url} score={it.favorites} url={it.url}/>))}
    </ul>
  )
}

export default Charlist