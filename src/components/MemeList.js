import React, { Component } from 'react';
import Meme from './Meme';

class MemeList extends Component {
  render(){
    return(
        <div className="meme">
          <Meme />
        </div>
    )
  };
}

export default MemeList;
