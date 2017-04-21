import React, { Component } from 'react';
import MotivationList from './MotivationList'
import { database, firebaseListToArray } from '../utils/firebase';
import firebase from 'firebase';

class Motivation extends Component {
  constructor(props) {
    super(props);

    this.ref = firebase.database().ref();
    this.state = {
      motivations: []
    }
  }

  componentWillMount(){
    database.ref('/motivational')
      .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('motivation', results);

          this.setState({
            motivations: results
          });
        });
}

  render(){
    const listofmotivations = this.state.motivations.map((item) => {
      return <MotivationList id={ item.id } description={item.description} alt="" />
    })

    return(
      <section>
      <div className="row memes">
          {listofmotivations}
      </div>
      </section>
    )
  };
}

export default Motivation;
