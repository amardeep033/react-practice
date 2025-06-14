import React,{useState} from 'react'
import './EditModal.css'
import ReactDOM from 'react-dom'
import Card from './Card'

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.cancelHandler} />
    )
}

const ModalOverlay = (props) => {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.desc);
    const submitHandler = (e) => {
        e.preventDefault();
        props.updateHandler(props.id,title, desc);
    }
    return (
        <div className='overlay'>
            <form onSubmit={submitHandler}>
                <Card>
                    <header>
                        <h3>EDIT TODO</h3>
                    </header>
                    <div>
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <label for="desc">Desc:</label>
                        <input type="text" id="desc" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
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

const EditModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop cancelHandler={props.cancelHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay cancelHandler={props.cancelHandler} updateHandler={props.updateHandler} id={props.id} title={props.title} desc={props.desc}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default EditModal