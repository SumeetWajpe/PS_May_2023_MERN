import React, { useContext } from "react";

let CounterContext = React.createContext({ count: 0 });

export function GrandParent() {
  return (
    <>
      <h1>GrandParent </h1>
      <CounterContext.Provider value={{ count: 100 }}>
        <Parent />
      </CounterContext.Provider>
    </>
  );
}

export function Parent() {
  return (
    <div>
      <h2>Parent </h2>
      <Child />
    </div>
  );
}

export function Child() {
  let ctx = useContext(CounterContext);
  return (
    <div>
      <h3>Child </h3>

      <strong>Child - Count : {ctx.count}</strong>
    </div>
  );
}
