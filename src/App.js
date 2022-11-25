import { useEffect,useState } from 'react';
import './App.css';

function App() {

const[color,setColor]=useState('');
const [answers,setAnswers]=useState([])
const [result,setResult]=useState(null)
const [score,setScore]=useState(0);
const [bestScore,setBestScore]=useState(0)
const generateColor=()=>{
  const digits=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  
  const color= new Array(6).fill(0).map((el)=> el=digits[Math.floor(Math.random()*digits.length)]).join('')

return '#'+color
}

useEffect(()=>{
const actualColor=generateColor();
setColor(actualColor);
setAnswers([actualColor,generateColor(),generateColor()].sort(()=>0.5 - Math.random()))

},[])

const answerHandler=(e)=>{
if(e.target.outerText===color){
const actualColor=generateColor();
setColor(actualColor);
setAnswers([actualColor,generateColor(),generateColor()].sort(()=>0.5 - Math.random()))
setResult(true)
setScore((prev)=>{
  if(prev+1>bestScore)
  setBestScore(prev+1);
return prev+1
})
}else{
setResult(false)
setScore(0);
}

}
  return (
    <div className="App">
      <div className='container'>
      <div>Best Score: {bestScore}</div>
      <div style={{ backgroundColor:color}}  className='block'>
      </div>
      </div>
      <div className='answers-container'>
       { answers.map((answer)=> <button onClick={(e)=>answerHandler(e)} className='answers' key={answer}>{answer}</button>)}
          
      </div>
      {result===true&&
     <div className='result-corect'>
    Corect!
     </div>}
     {result===false&&
     <div className='result-false'>
    Wrong!
     </div>
} 
<div>Score: {score}</div>
    </div>
  );
}

export default App;
