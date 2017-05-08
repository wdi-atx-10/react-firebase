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
    database.ref('/motivational')
        .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('motivations', results);

          this.setState({
            motivation: results
          });
        });
  }

  render(){
    const motivations = this.state.motivations.map((motivation) => {
      return <Motivation key = { motivation.id } imageUrl  = { motivation.imageUrl } alt="" />;
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
