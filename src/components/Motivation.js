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

      this.setState({
        motivations: results
      });
    });
  }

  render(){
    const motivationitems = this.state.motivations.map((motivationitem) => {
      return <MotivationList description={ motivationitem.description } key={ motivationitem.id } />
    });

    return(
      <section>
      <div className="row memes">
        { motivationitems }
      </div>
    </section>
    )
  };
}

export default Motivation;
