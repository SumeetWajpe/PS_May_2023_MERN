import React from "react";
import { MessageType } from "../types/message.type";

type MessageProps = {
  msg: MessageType;
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div>
        <h2>{this.props.msg.message}</h2>
        <p>{this.props.msg.from}</p>
        <p>{this.props.msg.to}</p>
      </div>
    );
  }
}
