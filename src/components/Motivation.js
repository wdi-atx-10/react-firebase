import React, { Component } from 'react';
import MotivationList from './MotivationList'
import { database, firebaseListToArray } from '../utils/firebase';
import './Motivation.css';

class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motivations: [],
    }
  }

  componentWillMount(){
    database.ref('/motivational')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('results', results);
        this.setState({
          motivations: results
        });
      });
  }

  render(){
    const motivationitems = this.state.motivations.map(item => {
          return <MotivationList id={item.id} description={item.description} memes={item.memes}/>
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
