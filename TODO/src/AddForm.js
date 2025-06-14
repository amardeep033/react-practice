import React, { useState,useContext } from 'react'
import ErrorModal from './ErrorModal';
import { authContext } from './auth-context'
import './AddForm.css'
import Card from './Card';

const AddForm = (props) => {
  const auth = useContext(authContext)
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [err, setErr] = useState(null);

  const errorHandler = () => {
    setErr(null);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || desc.trim() === "") {
      return setErr({
        title: "An Error occured",
        msg: "Enter valid title and description"
      })
    }
    if (desc.trim().length < 5) {
      return setErr({
        title: "An Error occured",
        msg: "Enter atleast 5 char long description"
      })
    }
    props.AddHandler(auth.user,title, desc)
    setTitle('')
    setDesc('')
  }
  return (
    <div className='addform'>
      {err && <ErrorModal title={err.title} msg={err.msg} errorHandler={errorHandler} />}
      <form onSubmit={submitHandler}>
      <Card>
        <label for="title">TITLE:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label for="desc">Desc:</label>
        <input type="text" id="desc" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button type="submit">Submit</button>
        </Card>
      </form>
      </div>
  )
}

export default AddForm