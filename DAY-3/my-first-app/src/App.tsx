import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message.component";
import { MessageType } from "./types/message.type";

class App extends React.Component {
  messageOne: MessageType = { message: "Hello", from: "John", to: "Alen" };
  render() {
    return <Message msg={this.messageOne} />;
  }
}

export default App;
