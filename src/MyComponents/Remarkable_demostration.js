import React, { Component } from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

export default class RemarkableDemostration extends Component {
    render() {
      const md = new Remarkable();
      md.renderer = new RemarkableReactRenderer();
      console.log(md);
    return (
      <div>
        <h3>Remarkable Demostration</h3>
      </div>
    );
  }
}

