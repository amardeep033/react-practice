import React, { useState, useContext } from 'react'
import ErrorModal from './ErrorModal';
import { authContext } from './auth-context';
import Card from './Card';
import './Login.css'

const Login = (props) => {
    const auth = useContext(authContext);
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [err, setErr] = useState(null);

    const errorHandler = () => {
        setErr(null);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const filteredList=props.userDb.find((it)=>{return(it.email===email && it.passw===passw)})
        if (!filteredList) {
            return setErr({
                title: "Login failed",
                msg: "Enter valid email and password"
            })
        }
        auth.login(filteredList.user)
    }

    return (
        <div className='login'>
            {err && <ErrorModal title={err.title} msg={err.msg} errorHandler={errorHandler} />}
            <form onSubmit={submitHandler}>
                <Card>
                    <h3>LOGIN</h3>
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

export default Login