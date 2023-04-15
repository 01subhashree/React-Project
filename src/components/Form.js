import { useState, useRef } from 'react';
import style from './Forms.module.css' ;

const Form = () => {
    
    // const [ inputData, setInputData] = useState([]);
    const [inputs, setInputs] = useState(false)
    const [fullnames, setFullNames] = useState("")
    const [emails, setEmails] = useState("")
    const [Age, setAge] = useState("")
    const [city,setCity] = useState("")
    // const [updateInput,setUpdateInput] =useState([])

    const inputData = useRef([]);

    const submitHandle = (e) => {
        e.preventDefault();
        const newInputData = [...inputData.current ,
            { 'Fullname': fullnames, 'Email': emails, 'Age': Age, 'City': city }]
        inputData.current=newInputData
        console.log(inputData)
        setInputs(!inputs);
        setAge("");
        setCity("");
        setEmails("");
        setFullNames("");
        
    }

    const removeTable = (index) => {
        inputData.current.splice(index,1)
        inputData.current = [...inputData.current]
        console.log(inputData);
        setInputs(!inputs);
    }

    // const updateData = (index) => {
    //     const updateValue = [...inputData.current]
        
    // }
    return (
        <>
            <div className={style.container}>
                <div className={style.container2}>
            <div className={style.wrapper}>
            <form  className={style.wrapper1} onSubmit={submitHandle} >
                    <input type="text" placeholder="Enter Your Fullname" value={fullnames}
                        onChange={(e)=>setFullNames(e.target.value)} />
                    <input type="email" placeholder="Enter EmailId" value={emails}
                        onChange={(e)=>setEmails(e.target.value)} />
                    <input type="number" placeholder="Enter your Age" value={Age}
                        onChange={(e)=>setAge(e.target.value) } />
                    <input type='text' placeholder='Enter Your City' value={city}
                    onChange={(e)=>setCity(e.target.value)} />
                <button>Submit</button>
            </form>
            </div>
            <div className={style.wrapper2}>
                <h3>Name: {fullnames}</h3>
                <h3>Email: {emails}</h3>
                <h3>Age: {Age}</h3>
                <h3>City: {city}</h3>
            </div>
            </div>
            <div className={style.wrapper3}>
                    <div className={style.Table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>EmailId</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th colSpan='2'></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {inputData.current.map((elem, index) => (
                                    <tr key={index}>
                                        <td>{elem.Fullname}</td>
                                        <td>{elem.Email}</td>
                                        <td>{elem.Age}</td>
                                        <td>{elem.City}</td>
                                        <td onClick={()=>removeTable(index)}>❌</td>
                                        {/* <td onClick={()=>updateData(index)}>Update</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
        </>
    )
}
export default Form;