import React from "react";
import Hello from "./Components/Hello";
import "./App.css";
import randomizer from "randomizer-js";

class App extends React.Component {
  state = {
    data: {
      message: "random message",
      hello: "My Name is Tom",
    },
  };

  handleChange = () => {
    this.setState({
      data: {
        message: "new Data",
        hello: "new Hello",
      },
    });
  };

  render() {
    const rand = randomizer();
    return (
      <div>
        <button onClick={this.handleChange}>Click</button>
        <Hello message={this.state.data.message} />
        <Hello hello={this.state.data.hello} />
        <Hello>Today is a beautiful day</Hello>
      </div>
    );
  }
}

export default App;
