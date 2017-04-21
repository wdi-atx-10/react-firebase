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
      .on('value', data =>{
        const results = firebaseListToArray(data.val());
        console.log('motivational', results);

        this.setState({
          motivation: results
        });
      });
  }

  render(){
    const motivationitems = this.state.motivation.map((motivation)=>{
      return(
        <div>
          <h1>{motivation.title}</h1>
          <p>{motivation.description}</p>
        </div>
      )
    })

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
