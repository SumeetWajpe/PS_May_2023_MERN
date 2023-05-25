import React, { useContext, useState } from "react";
type CounterContextType = {
  count: number;
  setCounterWithContext: (value: number) => void;
};

let CounterContext = React.createContext<CounterContextType>({
  count: 0,
  setCounterWithContext() {},
});

export function CounterContextProvider(props: any) {
  const [counter, setCounter] = useState({ count: 100 });

  return (
    <CounterContext.Provider
      value={{
        count: counter.count,
        setCounterWithContext: (value: number) => {
          setCounter({ count: value });
        },
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export function GrandParent() {
  return (
    <>
      <h1>GrandParent </h1>

      <CounterContextProvider>
        <Parent></Parent>
      </CounterContextProvider>
    </>
  );
}

export function Parent() {
  // The consumer will infer "value" of the context from its nearest provider !
  return (
    <>
      {/* <CounterContext.Provider value={{ count: 1000 }}>    */}
      <h2>Parent </h2>
      <Child />
      <AnotherChild />
      {/* </CounterContext.Provider> */}
    </>
  );
}

export function Child() {
  let ctx = useContext(CounterContext);
  return (
    <div>
      <h3>Child </h3>

      <strong>Child - Count : {ctx.count}</strong>
      <button
        className="btn btn-primary"
        onClick={() => ctx.setCounterWithContext(ctx.count + 1)}
      >
        ++
      </button>
    </div>
  );
}
// In Functional Component
export function AnotherChild() {
  let ctx = useContext(CounterContext);
  return (
    <div>
      <h3>Another Child </h3>

      <strong>Another Child - Count : {ctx.count}</strong>
    </div>
  );
}

// class AnotherChild extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <>
//         <CounterContext.Consumer>
//           {value => (
//             <>
//               <strong>Another Child - Count : {value.count}</strong>
//               <button className="btn btn-primary">++</button>
//             </>
//           )}
//         </CounterContext.Consumer>
//       </>
//     );
//   }
// }
