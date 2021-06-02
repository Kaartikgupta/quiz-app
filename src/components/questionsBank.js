import { Component } from "react";
import Question from '../quizService';
class Questions extends Component{
    state={
        questionBank:[]
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
    
    render(){
        
        return(
        <div>
           {this.state.questionBank.map(
                ({question,answers,correct,questionId})=><h4>{question}</h4>
           )}
        </div>
        )
    }
} 
export default Questions;