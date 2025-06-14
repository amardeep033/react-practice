import React from 'react'
import './DeleteModal.css'
import ReactDOM from 'react-dom'
import Card from './Card'

const Backdrop = (props) => {
    return(
        <div className='backdrop' onClick={props.cancelDelHandler} />
    )
}

const ModalOverlay = (props) => {
    return(
        <div className='overlay'>
            <Card>
        <header>
            <h3>Delete Confirmation</h3>
        </header>
        <div>
            <p>Are you sure you want to delete?</p>
        </div>
        <footer>
            <button onClick={props.deleteUserHandler}>Delete</button>
            <button onClick={props.cancelDelHandler}>Cancel</button>
        </footer>
        </Card>
    </div>
    )
}

const DeleteUser = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop cancelDelHandler={props.cancelDelHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay deleteUserHandler={props.deleteUserHandler} cancelDelHandler={props.cancelDelHandler} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default DeleteUser