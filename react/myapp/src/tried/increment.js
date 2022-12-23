import './App.css';
import { useState, useRef } from 'react';
const jsx = <h1> Jani</h1>
function App() {
  //1. const [inputHolder, setInputText] = useState("")

  //2. const [counter, setCounter] = useState("")
  // function incrementCount() {
  //   setCounter(counter + 1)
  // }
  // function decrementCount() {
  //   setCounter(counter - 1)
  // }

  const [counter, setCounter] = useState("")
  const counterRef=useRef(200);
  const inputRef=useRef(201);
  function incrementCount() {
      setCounter(counter + 1)
    }
    function decrementCount() {
      setCounter(counter - 1)
    }

    function incrementCountRef() {
      console.log("Counter:", counterRef)
      counterRef.current=counter.current+1

    }
    function decrementCountRef() {
      console.log("Counter:", counterRef)
      counterRef.current=counter.current-1


    }

    function inputButton(){
      console.log(inputRef)
    }
  return (
    <div className="App">

      {/* 1. 
       <div className='input'>
          <input value={inputHolder} onChange={(event)=>{
            setInputText(event.target.value)
          }}/>
          <p>{inputHolder}</p>
      </div> */}

{/*    2.
      <button onClick={incrementCount}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrementCount}>Decrement</button> */}


      <button onClick={incrementCountRef}>Increment</button>
      <p>{counterRef.current}</p>
      <button onClick={decrementCountRef}>Decrement</button>
<br></br>
<br></br>
      <input ref={inputRef} value="Click the button" />
              <button onClick={inputButton}>Click me</button>

      <h1> Abhishek </h1>
      {jsx}
    </div>
  );
}

export default App;
