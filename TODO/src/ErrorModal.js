import React from 'react'
import './ErrorModal.css'
import ReactDOM from 'react-dom'
import Card from './Card'

const Backdrop = (props) => {
    return(
        <div className='backdrop' onClick={props.errorHandler} />
    )
}

const ModalOverlay = (props) => {
    return(
        <div className='overlay'>
            <Card>
        <header>
            <h3>{props.title}</h3>
        </header>
        <div>
            <p>{props.msg}</p>
        </div>
        <footer>
            <button onClick={props.errorHandler}>OKAY</button>
        </footer>
        </Card>
    </div>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop errorHandler={props.errorHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} msg={props.msg} errorHandler={props.errorHandler} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ErrorModal