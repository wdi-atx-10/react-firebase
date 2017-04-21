import React, { Component } from 'react';
import MemeList from './MemeList';
import './MotivationList.css';

class MotivationList extends Component {
  constructor(props){
    super(props);
    this.state={
      memes: this.props.memes
    }
  }


  render(){
    return(
      <div className='container'>
        <div className='memeimgs'>
          <MemeList memeArray={this.state.memes}/>
          <br/>
        </div>
        <div className="text">
          <ul>
            <li><h1>{this.props.id}</h1></li>
            <li><h1>{this.props.description}</h1></li>
          </ul>
        </div>
      </div>
    )
  };
}

export default MotivationList;
