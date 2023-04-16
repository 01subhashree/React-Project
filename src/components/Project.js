import React,{useState} from "react"


export default function Project(props) {
   const [count,setCount] =useState(0)
    function onClickHandler(){
        if(count === props.source.length -1){
            setCount(count-(props.source.length-1))
        }else{
            setCount(count+1)
        } 
    }
    return (
        <div className="projectPage">
            <div className ="wrapper">
                <img className="image" src={props.source[count]} alt="images" />
            </div>
            <div className="button">
                <button className="btn" onClick={onClickHandler}>Change Pic</button>
            </div>
        </div>
    )
}