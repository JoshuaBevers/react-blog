import React, { Component } from "react";
import { getById } from "../functions/get";

class User extends Component {
  state = {
    title: "Loading...",
    content: "loading...",
    textInput: ""
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({
      textInput: ""
      //pushes change to a blog post.
    });
  };

  async componentDidMount() {
    try {
      const UserData = await getById(); //returns an array of post objects.
      const { title, content } = UserData;
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
      <>
        <h1>This is rendering the user.</h1>
        {this.state.content}
        <div>
          <label>
            <input
              type="text"
              value={this.state.textInput}
              placeholder="Text Input"
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </div>
      </>
    );
  }
}

export default User;
