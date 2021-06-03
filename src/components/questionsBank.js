import { Component } from "react";
import Question from '../quizService';
import '../assets/style.css'; 
import QuestionBox from './questionBox';
import Result from './result';
class Questions extends Component{
    state={
        questionBank:[],
        score:0,
        response:0
    }
    getQues=()=>{
        Question()
        .then((ques)=>
            {this.setState({questionBank:ques})}
        )
   }
    componentDidMount(){
        this.getQues();
    }
    playAgain=()=>{
        this.getQues();
        this.setState({score:0,response:0})
    }
    correctAnswer=(answerBtn,correct)=>{
        if(answerBtn===correct)
        {
            this.setState({score:this.state.score+1})
            
        }
        console.log(correct,answerBtn)
        this.setState({response:this.state.response<5?this.state.response+1:5})
    }
    
    render(){
        
        return(
        <div>
           {
            this.state.response<5 ? this.state.questionBank.map(
                ({question,answers,correct,questionId})=>
                <QuestionBox 
                    question={question} 
                    answers={answers} 
                    key={questionId} 
                    selected={answerBtn=>this.correctAnswer(answerBtn,correct)}
                />
           ):<Result score={this.state.score} playAgain={this.playAgain}/>
           }
           
        </div>
        )
    }
} 
export default Questions;