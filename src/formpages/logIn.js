import React, { useState } from 'react'
import './logIn.css'

export default function LoginForm({changeSwitch}) {
    const [emails, setEmails] = useState("")
    const [passw, setPassw] = useState("")
    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(emails);
    }
    return (
        <div className="container2">
            <h1>Welcome</h1>
            <h3>Log In  for your account</h3>
            <form onSubmit={onSubmitHandler}>
                <h4>Email</h4>
                <input type="email" placeholder="youremail@gmail.com" id="email" value={emails} onChange={(e) => setEmails(e.target.value)} />
                <h4>Password</h4>
                <input type="password" placeholder="Enter your password" id="password" value={passw} onChange={(e) => setPassw(e.target.value)} />
                < br/>
                < br/>
                < br/>
                <button className='btn1'>Submit</button>
            </form>
            < br/>
            <div>
                <button className='btn2' onClick={changeSwitch}>Do you have account ? Register here</button>
            </div>
        </div>
    )
}
