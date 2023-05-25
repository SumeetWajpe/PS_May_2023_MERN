import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const courses = useSelector((state: any) => state.courses.courses);
  return <div className="App">{courses.length}</div>;
}

export default App;
