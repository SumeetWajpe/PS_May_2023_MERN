import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";

class App extends React.Component {
  render(): React.ReactNode {
    //return <ListOfCourses />;
    return (
      <>
        <Message message="Hello" />
        <Message message="Hey" />
        <Message message="Hola" />
      </>
    );
  }
}
export default App;
