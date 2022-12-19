import "./App.css";
import React from "react";
import Basicinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Ray",
          number: "704-123-4567",
          dob: "07/12/2001",
        },
      ],
      people: [
        {
          name: "Los",
          number: "704-124-2344",
          dob: "01/20/1988",
        },
        {
          name: "Jay",
          number: "704-903-2933",
          dob: "04/12/1992",
        },
        {
          name: "Sam",
          number: "704-982-2012",
          dob: "01/09/2000",
        },
      ],
    };
  }
  render() {
    // return this.state.person.map(function (person, index) {
    //   return <Basicinfo key={index} person={person} />;
    // });
    return this.state.people.map(function (person, index) {
      return <Basicinfo key={index} person={person}></Basicinfo>;
    });
  }
}

export default App;
