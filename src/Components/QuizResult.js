import './Button.css'
const QuizResult = ({ score, restartHandler }) => {

    return (
        <div>
            <h2>Your score : {score}/ 20</h2>
            {(score > 11) ? <h2> congratulations You Passed </h2> :
                <button className="btn" onClick={restartHandler}>ReStart</button>
            }
        </div>
    )
}
export default QuizResult;