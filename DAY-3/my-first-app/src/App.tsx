import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MessageModel } from "./models/message.model";
import { Message } from "./components/message/message.component";

class App extends React.Component {
  messageOne: MessageModel = new MessageModel(
    "Hello",
    "John",
    "Carter",
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png",
  );
  messageTwo: MessageModel = new MessageModel(
    "Hey",
    "John",
    "Alen",
    "https://www.shutterstock.com/image-vector/hey-speech-bubble-retro-style-260nw-556644574.jpg",
  );
  messageThree: MessageModel = new MessageModel(
    "Hola",
    "Mark",
    "Alen",
    "https://www.shutterstock.com/image-vector/hola-word-lettering-spanish-hello-260nw-2170222797.jpg",
  );
  render() {
    return (
      <div className="App">
        <Message msg={this.messageOne} />
        <Message msg={this.messageTwo} />
        <Message msg={this.messageThree} />
      </div>
    );
  }
}

export default App;
