import { useState } from 'react';


function App() {


  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];


const updateCalc = value =>{ 
  if(
    ops.includes(value) && calc === '' ||
    ops.includes(value) && ops.includes(calc.slice(-1)
    )
  ){
    return;
  }

  setCalc(calc + value);
    if(!ops.includes(value)){
          setResult(eval(calc + value).toString())
    }




 
}


  const createDigits=()=>{ /* createDigits contains the button equation and pushes the button tags with that equation */
    const digits = [];
      for(let i = 1; i<10; i++){
        digits.push(
          <button onClick={()=> updateCalc(i.toString()
            )}
              key={i}>
                {i}
                </button>
        )
      }

      return digits

  } /* Created a function called createDigits with an empty arguments and the function is that for every digits if it's less than 10 push a button with it's unique key and increment it by 1 and it stops at ten. */

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }


  const deleteLast = () =>{
    if(calc === ''){
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className = "calculator">
    <div className="display">     
     { result ? <span>({result})</span> : ''} { calc || "0"}
  </div>
  <div className="operators">
    <button onClick={()=>updateCalc('/')}>/</button>
    <button onClick={()=>updateCalc('*')} >*</button>
    <button onClick={()=>updateCalc('+')}>+</button>
    <button onClick={()=>updateCalc('-')}>-</button>

    <button onClick={deleteLast}>DEL</button>

  </div>
    <div className="digits">
      {createDigits()}
      <button onClick={()=>updateCalc('0')}>0</button> 
      <button onClick={()=>updateCalc('.')}>.</button>
      <button onClick={calculate}>=</button>


    </div>
    </div>
      
    </div>
  );
}

export default App;
