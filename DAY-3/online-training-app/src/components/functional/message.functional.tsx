// export function Message() {
//   return <h1>Functional Component !</h1>;
// }

type MessageProps = {
  message: string;
};

export const Message = (props: MessageProps) => {
  return <h1>{props.message}</h1>;
};
