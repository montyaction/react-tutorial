import React from 'react';

export default class Channel extends React.Component{

    constructor(){
        super();
        this.state = {
            msg : 'Technical MontyAction Youtube Channel'
        };
    }

    subscribe() {
        this.setState({
            msg : 'Thanksyou for subscribing our Youtube Channel..!'
        })
        alert('Updating msg!');
    }

    render () {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={ () => { this.subscribe() }}>Subscribe</button>
            </div>
        );
    }
}
