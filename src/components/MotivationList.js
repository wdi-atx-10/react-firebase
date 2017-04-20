import React, { Component } from 'react';
import MemeList from './MemeList';

class MotivationList extends Component {
  render(){
    return(
        <div className="col-md-6 meme">
          <ul>
            <li>{this.props.id}</li>
            <li>{this.props.description}</li>
          </ul>
          <MemeList />
        </div>
    )
  };
}

export default MotivationList;
