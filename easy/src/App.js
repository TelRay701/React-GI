import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>Ray</li>
          <li>704-123-4567</li>
          <li>07/12/2001</li>
        </ul>
      </div>
    );
  }
}

export default App;
