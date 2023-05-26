import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const courses = useSelector((store: any) => store.courses);
  return <div className="App">{courses.length}</div>;
}

export default App;
