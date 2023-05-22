import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message.component";
import { MessageModel } from "./models/message.model";

class App extends React.Component {
  messageOne: MessageModel = new MessageModel("Hello", "John", "Carter");
  render() {
    return <Message msg={this.messageOne} />;
  }
}

export default App;
