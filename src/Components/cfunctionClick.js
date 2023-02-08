import React, { Component } from 'react'

class cfunctionClick extends Component {

    constructor(props) {
        super(props);
        // this.changeEvent=this.changeEvent.bind(this);

        this.state = {
            coures : "M.com",
        }
    }

    changeEvent = () => {

        this.setState({
            coures : "B.com",
            roll : this.props.roll
        })

        console.log("Hello montyaction", this.state.coures, this.state.roll);
    }

  render() {
    return (
      <div>
        <button onClick={ this.changeEvent }>Click Me</button>
        {this.state.coures}
        {this.state.roll}
      </div>
    )
  }
}

export default cfunctionClick;