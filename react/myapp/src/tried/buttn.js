import './App.css';
import { useState, useRef, useEffect } from 'react';
function App() {

  const [dummyValue,dummy] = useState(true)
  const [count,setCount] = useState(0)
  const countRef = useRef(200)

  useEffect(() => {
    console.log("Use effect with empty dependencies ")
  },[]
)
 
useEffect(() => {
    console.log("Use effect without dependencies ")
  }
)
useEffect(() => {
    console.log("Use effect with one dependencies ")
  } , {count}
)
useEffect(() => {
    console.log("Use effect with ref dependencies ")
  } , [countRef.current]
)



  return (

<div className="inputf">
  <button onClick={() => dummy((x) => !x)}> click me </button>
  <button onClick={() =>setCount((x) => x+1)}> update count </button>
  <button onClick={() =>{
    countRef.current={}}}> update Ref count </button>

  <p>Dummy state - {dummyValue} CountState - {count}</p>
</div>

  );
}

export default App;
