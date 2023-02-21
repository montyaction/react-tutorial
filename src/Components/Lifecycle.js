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

    render() {

        return (
            <div>
                <h1>Component Lifecycle demo</h1>
                <p>Count : {this.state.count}</p>
                <button>Update Count</button>
            </div>
        );
    }

}

export default Lifecycle;