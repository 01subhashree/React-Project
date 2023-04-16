import SignUp from "./formpages/SignUp.js"
import LoginForm from "./formpages/logIn"
import React,{useState} from 'react'

function App() {
  const [forms,setForms]=useState(true)
   const changeSwitch =()=>{
    setForms(false);
   }
   const changeSwitch2=()=>{
    setForms(true);
   }

  return (
    <div className="App">
    {forms === true? <LoginForm changeSwitch={changeSwitch}/> : <SignUp changeSwitch2={changeSwitch2}/>}
    </div>
  );
}

export default App;
