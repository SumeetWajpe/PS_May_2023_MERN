import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";
import { Counter } from "../functional/counter";

class App extends React.Component {
  render(): React.ReactNode {
    //return <ListOfCourses />;
    return <Counter />;
  }
}
export default App;
