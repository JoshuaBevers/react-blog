import React, { Component } from "react";
import logo from "./logo.svg";
import getAll from "./functions/get";
import "./App.css";

//components
import User from "./components/user";

export class App extends Component {
  state = {
    title: "Loading...",
    content: "loading..."
  };
  async componentDidMount() {
    try {
      const UserData = await getAll(); //returns an array of post objects.
      const { title, content } = UserData[0];
      this.setState({
        title: title,
        content: content
      });
    } catch (e) {
      return e;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.title}</p>
          <p>{this.state.content}</p>
          <User />
        </header>
      </div>
    );
  }
}

export default App;
