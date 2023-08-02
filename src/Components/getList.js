import React, { Component } from 'react';
import Axios from 'axios';

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         props : []
      }
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log(response);
            this.setState({ props: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
    }

  render() {
    const { props } = this.state;

    return (
      <div>
        <h1>Post List</h1>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- table rows go here --> */}
            {props.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostList;