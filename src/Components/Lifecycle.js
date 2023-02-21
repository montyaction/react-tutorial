import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = { count : 0 }
      console.log('Lifecycle : constructor');
    }

    componentDidMount() {
        console.log('Lifecycle : componentDidMount');
    }

    componentDidUpdate() {
        console.log("Lifecycle : componentDidUpdate");
    }

    handleClick = () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    render() {

        return (
            <div>
                <h1>Component Lifecycle demo</h1>
                <h2>Count : {this.state.count}</h2>
                <button onClick={this.handleClick}>Update Count</button>
            </div>
        );
    }

}

export default Lifecycle;