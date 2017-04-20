import React, { Component } from 'react';
import MotivationList from './MotivationList'
import { database, firebaseListToArray } from '../utils/firebase';

class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motivations: []
    }
  }
  componentWillMount(){
    //Write
    //Your
    //Code
    //Here!
  }

  render(){
    //Write your const to pass down the state to the MotivationList.js Component
    //

    return(
      <section>
      <div className="row memes">
        {motivationitems}
      </div>
    </section>
    )
  };
}

export default Motivation;
