import React, { Component } from 'react';
import subjects from './HOC';

class Ajay extends Component {

    state={ marks : 0 }

    marksChanged=()=>{ this.setState({ marks : this.state.marks + 1 })}

    render() {
        return (
            <div>
                <h3 onMouseOver={this.marksChanged}>Ajay's Marks {this.state.marks}, {this.props.hocsub}</h3>
            </div>
        )
    }
}
export default subjects(Ajay)