import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message.component";
import { MessageModel } from "./models/message.model";

class App extends React.Component {
  messageOne: MessageModel = new MessageModel(
    "Hello",
    "John",
    "Carter",
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png",
  );
  render() {
    return <Message msg={this.messageOne} />;
  }
}

export default App;
