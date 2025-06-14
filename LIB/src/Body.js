import React from 'react'
import Bookitem from './Bookitem'
import './body.css'

const Body = (props) => {
  if (props.tot.length === 0) {
    return (
      <div className='mainbody'>
        <h3>Oops!!! No result found</h3>
      </div>
    )
  }
  return (
    <div className='mainbody'>
      <h3 className='heading'>Total Result found:{props.tot.length}</h3>
      <ul className='list'>
        {props.list.map(it => (<Bookitem key={it.id} id={it.id} name={it.name} image={it.image} author={it.author} subject={it.subject} date={it.date} />))}
      </ul>
    </div>
  )
}

export default Body