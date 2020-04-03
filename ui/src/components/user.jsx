import React, { Component } from "react";
import { getById } from "../functions/get";

class User extends Component {
  state = {
    title: "Loading...",
    content: "loading...",
    textInput: "",
    inputTitle: "",
    id: 1,
    inputComment: ""
  };

  postData = async data => {
    const url = `http://localhost:3001/users/post/comment`;
    console.log(
      "This is now trying to post from users.postData. The data is: ",
      data
    );
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const reply = await response;
    if (reply.status === 200) {
      alert("Comment Saved!");
    }
    if (reply.status !== 200) {
      alert("womp womp");
    }
    return await response.json(); // parses JSON response into native JavaScript objects
  };

  handleTitle = event => {
    this.setState({
      inputTitle: event.target.value
    });
  };

  handleComment = event => {
    this.setState({
      inputComment: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log("this was submitted.");
    const data = {
      title: this.state.inputTitle,
      id: this.state.id,
      content: this.state.inputComment
    };
    this.postData(data);
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
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.inputTitle}
                placeholder="Blog Title"
                onChange={this.handleTitle}
              ></input>
              <input
                type="text"
                value={this.state.inputContent}
                placeholder="Text Input"
                onChange={this.handleComment}
              ></input>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default User;
