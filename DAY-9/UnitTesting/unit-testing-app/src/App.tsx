import React from "react";
import logo from "./logo.svg";
import "./App.css";

export type CounterState = {
  count: number;
};

export default class App extends React.Component<{},CounterState> {
  state: Readonly<CounterState> = { count: 0 };
  render(): React.ReactNode {
    return (
      <>
        <strong>{this.state.count}</strong>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ++
        </button>
      </>
    );
  }
}
