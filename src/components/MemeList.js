import React, { Component } from 'react';
import Meme from './Meme';
import './MemeList.css';

class MemeList extends Component {

  constructor(props){
    super(props);
    this.state={
      memes: this.props.memeArray
    }
  }

  render(){

    const onememe = this.state.memes.map(item => {
          console.log("img item",{item});
          return <Meme img={item} />
    });

    return(
        <div className="meme">
          {onememe}
        </div>
    )
  };
}

export default MemeList;
