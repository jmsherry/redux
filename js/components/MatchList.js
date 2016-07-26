import React, {
  Component
} from 'react';
import Match from './Match';
import * as BrowseActions from './../actions/BrowseActions';
import _ from 'lodash';

class MatchList extends Component {
  constructor(){
    super();
  }
  componentWillMount(){
    console.log('in', BrowseActions);
    BrowseActions.listMatches();
  }
  render() {
    //let matches = this.state.matches;
    const match = {
      players: [
        {
          name: 'Steve Davis',
          frames: 2,
          score: 36
        }, {
          name: 'Steven Hendry',
          frames: 4,
          score: 6
        }
      ]
    }
    return (
      <section id="matches">
        <h1>Matches</h1>
        <ul className="matchList">
          <Match match={match}/>
        </ul>
      </section>
    );
  }
}

export default MatchList;
