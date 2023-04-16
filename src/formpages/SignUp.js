import React,{ useState } from 'react'
import './SignUp.css'
export default function SignUp({changeSwitch2}) {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="container1">
            <h1>Welcome</h1>
            <h3>Sign-Up  for your account</h3>
            <form onSubmit={handleSubmit}>
                <span>
                    <h4>First Name</h4>
                    <input type="text" placeholder="Enter your firstname" id="firstN" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </span>
                <span>
                    <h4>last Name</h4>
                    <input type="text" placeholder="Enter your Lastname" id="lastN" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </span>
                <span>
                    <h4>Email</h4>
                    <input type="email" placeholder="youremail@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </span>
                <span>
                    <h4>Password</h4>
                    <input type="password" placeholder="Enter your password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </span>
                <br />
                <br />
                <br />
                <button className ="button1">Submit</button>
            </form>
            <br />
            <br />
            <button className ="button2" onClick={changeSwitch2}>Already have account ? Log In here</button>
        </div>
    )
}