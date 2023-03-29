import './Button.css'

const NextQuestion = ({ changeQuestions }) => {
    return (
        <div>
            <button className="btn"
                onClick={changeQuestions}>Next</button>
        </div>
    )
}
export default NextQuestion;