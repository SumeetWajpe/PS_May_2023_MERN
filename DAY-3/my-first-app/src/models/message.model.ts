// export type MessageType = {
//   message: string;
//   from: string;
//   to: string;
// };

export class MessageModel {
  constructor(
    public message: string,
    public from: string,
    public to: string,
    public imageUrl: string = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930",
  ) {}
}
