import { Component } from 'react';
import './App.css';
import './assets/style.css'
import Questions from './components/questionsBank'
class App extends Component {
  render(){
    return (
      <div className="container">
         <div className="title">
           QuizApp
         </div>
         
           <Questions />
         
       </div>
     );
  }
  
}

export default App;
