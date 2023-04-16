import { useState } from "react"

export default function Textarea() {
    const [text, setText] = useState('')

    const onChangeHandler = (event, value) => {
        console.log((event.target.value))
        if (event.target.value.length < 100) {
            setText(event.target.value)
        }
    }

    return (
        <div>
            <textarea placeholder="Enter your text here..." value={text} 
            onChange={onChangeHandler} rows="9"
            />
        </div>
    )
}