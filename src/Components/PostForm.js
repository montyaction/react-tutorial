import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userid : '',
         title : '',
         body : ''
      }
    }

  changeHandler = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render() {
    const { userid, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User ID</label>
          <input type="text" value={userid} name="userid" onChange={this.changeHandler} />
        </div>
        <div>
          <label>Title</label>
          <input type="text" value={title} name="title" onChange={this.changeHandler} />
        </div>
        <div>
          <label>Body</label>
          <input type="text" value={body} name="body" onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;