import React, { useContext, useState } from 'react'
import { authContext } from './auth-context'
import './Navg.css'
import EditPassword from './EditPassword'
import ErrorModal from './ErrorModal'
import DeleteUser from './DeleteUser'

const Navg = (props) => {
  const [err, setErr] = useState(null);
  const errorHandler = () => {
    setErr(null);
  }

  const [paswUpdate, setPaswUpdate] = useState(false);
  const cancelHandler = () => {
    setPaswUpdate(null);
  }
  const updateHandler = (oldPassw, newPassw) => {
    setPaswUpdate(null);
    if (newPassw.length <= 5) {
      return setErr({
        title: "Update failed",
        msg: "Enter new password of minimum 6 length"
      })
    }
    if (newPassw !== oldPassw) {
      return setErr({
        title: "Update failed",
        msg: "Both password didnt match"
      })
    }
    props.UpdatePasswordHandler(newPassw)
  }

  const [delUser, setDelUser] = useState(false);
  const cancelDelHandler = () => {
    setDelUser(null);
  }
  const deleteUserHandler = () => {
    setDelUser(null);
    props.RemoveUserHandler()
  }

  const changeFunction = (e) => {
    const query = e.target.value;
    if (query === "1") {
      auth.logout()
    }
    else if (query === "2") {
      setPaswUpdate(true)
    }
    else if (query === "3") {
      setDelUser(true)
    }
    e.target.value = ""
  };

  const auth = useContext(authContext)
  return (
    <React.Fragment>
      {err && <ErrorModal title={err.title} msg={err.msg} errorHandler={errorHandler} />}
      {paswUpdate && <EditPassword cancelHandler={cancelHandler} updateHandler={updateHandler} />}
      {delUser && <DeleteUser cancelDelHandler={cancelDelHandler} deleteUserHandler={deleteUserHandler} />}
      <div className='navg'>
        <h1 className='title'>ToDo List</h1>
        {auth.user ?
          <div className='profile'>
            <select id="profileid" onChange={changeFunction}>
              <option value="" selected hidden>Hello {auth.user}</option>
              <option value="1">Logout</option>
              <option value="2">Password</option>
              <option value="3">Delete</option>
            </select>
          </div>
          : null}
      </div>
    </React.Fragment>
  )
}

export default Navg