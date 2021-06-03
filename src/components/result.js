import React from 'react'
import '../assets/style.css'
const result=(props)=>{
    return(
        <div className="score-board">
            <div className="score">Your score is {props.score} out of 5</div>
            <div className="playBtn" onClick={props.playAgain}>Test yourself again!</div>
        </div>
    )
}
export default result;