import React from "react";
import { MessageModel } from "../models/message.model";

type MessageProps = {
  msg: MessageModel;
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
