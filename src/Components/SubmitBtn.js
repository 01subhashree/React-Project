import './Button.css'
const SubmitBtn =({submitHandler})=>{
    return(
        <div>
            <button className="btn" onClick={submitHandler}>Submit</button> 

        </div>
    )
}
export default SubmitBtn