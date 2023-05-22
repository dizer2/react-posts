import React, {useState} from "react";



const Counter = function (){
  const [count, setCount] = useState(0);


  function increment() {
    setCount(count + 1);
  }
  function desrement() {
    setCount(count - 1);
  }

  return (
   
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={desrement}>Desrement</button>

    </div>

  );
}

export default Counter;
