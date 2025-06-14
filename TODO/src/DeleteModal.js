import React from 'react'
import './ErrorModal.css'
import ReactDOM from 'react-dom'
import Card from './Card'

const Backdrop = (props) => {
    return(
        <div className='backdrop' onClick={props.rejectHandler} />
    )
}

const ModalOverlay = (props) => {
    const deleteHandler = () => {
        props.delTodoHandler(props.id);
    }
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
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={props.rejectHandler}>Cancel</button>
        </footer>
        </Card>
    </div>
    )
}

const DeleteModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop rejectHandler={props.rejectHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay id={props.id} delTodoHandler={props.delTodoHandler} rejectHandler={props.rejectHandler} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default DeleteModal