// export type MessageType = {
//   message: string;
//   from: string;
//   to: string;
// };

export class MessageModel {
  constructor(public message: string, public from: string, public to: string) {}
}
