import { useState, useRef, useEffect, useMemo } from 'react';
import './App.css';

function App() {
const[dummyValue, dummy] = useState(true)
const[count, setCount] = useState(0)

const memoizedCount = useMemo(() => count, [count])

function updateCount(){
  setCount((x) => x+1)
  console.log("memoizedcount:", memoizedCount)
}

  return (
    <div className="App">

      <button onClick={updateCount}> Update Count</button>
      {count}
      
    </div>

  );
}

export default App;
