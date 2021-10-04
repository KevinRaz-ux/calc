import {useState} from 'react';


function App() {


  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.'];


const updateCalc = value => { 
  setCalc(calc + value);
}


  const createDigits=()=>{ /* createDigits contains the button equation and pushes the button tags with that equation */
    const digits = [];
      for(let i = 1; i<10; i++){
        digits.push(
          <button key={i}>{i}</button>
        )
      }

      return digits

  } /* Created a function called createDigits with an empty arguments and the function is that for every digits if it's less than 10 push a button with it's unique key and increment it by 1 and it stops at ten. */


  return (
    <div className="App">
      <div className = "calculator">
    <div className="display">     
     { result ? <span>(0)</span> : ''} { calc || "0"}
  </div>
  <div className="operators">
    <button onClick={()=> updateCalc('/')}>/</button>
    <button onClick={()=> updateCalc('*')} >*</button>
    <button onClick={()=> updateCalc('+')}>+</button>
    <button onClick={()=> updateCalc('-')}>-</button>

    <button>DEL</button>
    
  </div>
    <div className="digits">
      {createDigits()}
      <button>0</button> 
      <button>.</button>
      <button>=</button>


    </div>
    </div>
      
    </div>
  );
}

export default App;
