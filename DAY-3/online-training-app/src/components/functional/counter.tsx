import { useState } from "react";

export function Counter() {
  let [count, setCount] = useState(10);
  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>++</button>
    </>
  );
}
