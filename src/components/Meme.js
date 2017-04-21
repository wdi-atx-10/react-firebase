import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {

  constructor(props){
    super(props);
    this.state={
      meme: this.props.img
    }
  }

  render(){
    return(
        <div className="meme">
          <img src={this.state.meme} alt=""/>
        </div>
    )
  };
}

export default Meme;
