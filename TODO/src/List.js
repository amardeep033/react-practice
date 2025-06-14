import React, { useContext,useState } from 'react'
import { authContext } from './auth-context'
import './List.css'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import ErrorModal from './ErrorModal'
import Card from './Card'

const List = (props) => {
    const auth = useContext(authContext)
    
    const [err, setErr] = useState(null);
    const errorHandler = () => {
        setErr(null);
    }

    const [edit, setEdit] = useState(null);
    const cancelHandler = () => {
        setEdit(null);
    }
    const EditTodoHandler=(id,title,desc)=>{
        setEdit({
            id:id,title:title,desc:desc
        })
    }
    const updateHandler=(id,title,desc)=>{
        setEdit(null);
        if (title.trim()==="" || desc.trim()==="") {
            return setErr({
                title: "Updation failed",
                msg: "Enter valid title or description"
            })
        }
        if (desc.trim().length<5) {
            return setErr({
                title: "Updation failed",
                msg: "Enter atleast 5 char long description"
            })
        }
        props.UpdateTodoHandler(id,title,desc)
    }


    const [del, setDel] = useState(null);
    const rejectHandler = () => {
        setDel(null);
    }
    const delHandler = (id) => {
        setDel(id);
    }
    const delTodoHandler = (id) => {
        setDel(null);
        props.DeleteTodoHandler(id)
    }


    const filteredList = props.todoDb.filter((it) => { return (it.user) === auth.user })
    if (filteredList.length === 0) {
        return (
            <Card>
                <h3>Oops!!! No Todo</h3>
            </Card>
        )
    }

    return (
        <React.Fragment>
        {err && <ErrorModal title={err.title} msg={err.msg} errorHandler={errorHandler} />}
        {edit && <EditModal id={edit.id} title={edit.title} desc={edit.desc} cancelHandler={cancelHandler} updateHandler={updateHandler}/>}
        {del && <DeleteModal id={del} delTodoHandler={delTodoHandler} rejectHandler={rejectHandler}/>}
        <ul className='list'>
            {filteredList.map(it => (
                <Card>
                    <div>Title: {it.title}</div>
                    <div>Desc: {it.desc}</div>
                    <button onClick={()=>EditTodoHandler(it.id,it.title,it.desc)}>EDIT</button>
                    <button onClick={()=>delHandler(it.id)}>DELETE</button>
                </Card>
            ))}
        </ul>
        </React.Fragment>
    )
}

export default List