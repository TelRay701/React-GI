import "./App.css";
import React from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Ray T",
          number: "704-123-4567",
          dob: "07/12/01",
        },
      ],
    };
  }
  render() {
    return this.state.person.map(function (person, index) {
      return <BasicInfo key={index} person={person} />;
    });
  }
}

export default App;
