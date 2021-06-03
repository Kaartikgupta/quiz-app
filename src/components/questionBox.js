import React,{useState} from 'react';
import '../assets/style.css'; 
const QuestionBox =(props)=>{
    const [answer,setAnswer]=useState(props.answers)//answer is the state name, set answer is the function to exzcecute on the state ans props.answer is the initial value.
    const [disable, setDisable] = useState(false);
    // set=()=>{
    //     setAnswer([answerBtn])
    // }
    return(
        <div className="questionBox">
            <div className="question">{props.question}</div>
            {answer.map(
                (answerBtn, index)=><button key={index} className="answerBtn" disabled={disable} onClick={
                    ()=>{setAnswer([answerBtn]);
                        props.selected(answerBtn);   
                        setDisable(true)
                    }
                }>
                   {answerBtn}
                </button>
            )}

            
        </div>
    )
}

export default QuestionBox;