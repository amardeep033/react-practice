import React, { useState, useContext } from 'react'
import ErrorModal from './ErrorModal';
import { authContext } from './auth-context';
import Card from './Card';
import './Signup.css'

const Signup = (props) => {
    const auth = useContext(authContext);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [err, setErr] = useState(null);

    const errorHandler = () => {
        setErr(null);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (props.userDb.length !== 0) {
            const filteredList = props.userDb.filter((it) => { return (it.email === email || it.user === user) })
            if (filteredList.length !== 0) {
                return setErr({
                    title: "Login failed",
                    msg: "Email or userId already in use"
                })
            }
        }
        if (user === "" || email === "" || passw === "") {
            return setErr({
                title: "Login failed",
                msg: "Enter valid userId, email or password"
            })
        }
        if (passw.length <= 5) {
            return setErr({
                title: "Login failed",
                msg: "Enter password of minimum 6 length"
            })
        }
        props.AddUserHandler(user, email, passw)
        setUser('')
        setEmail('')
        setPassw('')
        auth.login(user)
    }
    return (
        <div className='signup'>
            {err && <ErrorModal title={err.title} msg={err.msg} errorHandler={errorHandler} />}
                <form onSubmit={submitHandler}>
                <Card>
                <h3>SIGNUP</h3>
                    <label for="user">Username:</label>
                    <input type="text" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value.trim())} />
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value.trim())} />
                    <label for="passw">Passw:</label>
                    <input type="password" id="passw" name="passw" value={passw} onChange={(e) => setPassw(e.target.value.trim())} />
                    <button type="submit">Submit</button>
                    </Card>
                </form>
                </div>
    )
}

export default Signup