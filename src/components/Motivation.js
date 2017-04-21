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
            motivations: results
          });
        });
    }

  render(){
    const motivationitems = this.state.motivations.map((motivation)=>{
      return <MotivationList key={ motivation.id } description={ motivation.description } />
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
