import React from "react";

const Square = (props) => {
    return (
        <div onClick={props.onClick} className="value">
            <h4>{props.value}</h4> 
        </div>
    )
}
export default Square;