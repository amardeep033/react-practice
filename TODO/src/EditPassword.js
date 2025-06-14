import React,{useState} from 'react'
import './EditPassword.css'
import ReactDOM from 'react-dom'
import Card from './Card'

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.cancelHandler} />
    )
}

const ModalOverlay = (props) => {
    const [oldPassw, setOldPassw] = useState(null);
    const [newPassw, setNewPassw] = useState(null);
    const submitHandler = (e) => {
        e.preventDefault();
        props.updateHandler(oldPassw,newPassw);
    }
    return (
        <div className='overlay'>
            <form onSubmit={submitHandler}>
                <Card>
                    <header>
                        <h3>Change Password</h3>
                    </header>
                    <div>
                        <label for="old">New Pswrd:</label>
                        <input type="password" id="old" name="old" value={oldPassw} onChange={(e) => setOldPassw(e.target.value)}/>
                        <label for="new">ReEnter:</label>
                        <input type="password" id="new" name="new" value={newPassw} onChange={(e) => setNewPassw(e.target.value)} />
                    </div>
                    <footer>
                        <button type="submit">Update</button>
                        <button onClick={props.cancelHandler}>Cancel</button>
                    </footer>
                </Card>
            </form>
        </div>
    )
}

const EditPassword = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop cancelHandler={props.cancelHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay cancelHandler={props.cancelHandler} updateHandler={props.updateHandler}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default EditPassword