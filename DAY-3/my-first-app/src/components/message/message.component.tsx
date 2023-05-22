import React from "react";
import "./message.component.css";
import { MessageModel } from "../../models/message.model";

type MessageProps = {
  msg: MessageModel;
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div className="msg-card">
        <img
          src={this.props.msg.imageUrl}
          alt={this.props.msg.message}
          height="150px"
          width="200px"
        />
        <h2>{this.props.msg.message}</h2>
        <p>From : {this.props.msg.from}</p>
        <p>To : {this.props.msg.to}</p>
      </div>
    );
  }
}
