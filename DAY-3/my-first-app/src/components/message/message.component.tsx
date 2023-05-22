import React from "react";
import "./message.component.css";
import { MessageModel } from "../../models/message.model";

type MessageProps = {
  msg: MessageModel;
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div className="col-md-3">
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={this.props.msg.imageUrl}
            className="card-img-top"
            alt={this.props.msg.message}
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.msg.message}</h5>
            <p className="card-text">{this.props.msg.from}</p>
            <p className="card-text">{this.props.msg.to}</p>
          </div>
        </div>
      </div>
    );
  }
}
