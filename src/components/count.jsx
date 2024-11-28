import { useState } from "react";
import "./counter.css";

function Count() {
  const [count, setCount] = useState(0);
  const [counter, SetCounter] = useState(0);

  const Inc = () => setCount(count + counter);
  const Dec = () => setCount(count - counter);

  const increase = () => SetCounter(counter + 1);
  const Decrease = () => SetCounter(counter - 1);

  return (
    <div className="box">
      <h2>Counter App : {count}</h2>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>

      <h2>Counter is : {counter}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={Decrease}>Decrement</button>
    </div>
  );
}

export default Count;
