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
    database.ref('/motivational')
    .on('value', data => {
      const results = firebaseListToArray(data.val());
      console.log('motivations', results);

      this.setState({
        motivations: results
      });
    });
  }

  render(){
    //Write your const to pass down the state to the MotivationList.js Component
    //
    const motivation = this.state.motivations.map((motivation) => {
      return <MotivationList key={ motivation.id } imageUrl={ motivation.imageUrl } alt="" />;
    });

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
