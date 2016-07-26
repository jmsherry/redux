import React, {
  Component
} from 'react';
import Match from './Match';
import * as BrowseActions from './../actions/BrowseActions';
import _ from 'lodash';


class MatchList extends Component {
  constructor(){
    super();
    this.state = {
      matches: {}
    };
  }
  componentWillMount(){
    console.log('in componentWillMount', BrowseActions);
    const { store } = this.context;
    console.log('store', store, this.context);
    // const listMatches = BrowseActions.listMatches();
    // const matches = listMatches();
    // console.log(matches);
    // this.setState({matches});
  }
  render() {
    let matches = this.state.matches;
    // const matches = {
    //   0: {
    //     _id: 0,
    //     players: {
    //       0: {
    //         name: 'Steve Davis',
    //         frames: 2,
    //         score: 36
    //       },
    //       1: {
    //         name: 'Steven Hendry',
    //         frames: 4,
    //         score: 6
    //       }
    //     }
    //   }
    // }

    //Process from firebase to arrays.
    const matchesArray = [];
    const matchNumbers = _.keys(matches);
    matchNumbers.forEach(function(n){
      matchesArray.push(matches[n]);
    });
    const matchListings = matchesArray.map(function(match){
      return (<Match key={match._id} match={match} />);
    });

    return (
      <section id="matches">
        <h1>Matches</h1>
        <ul className="matchList">
          { matchListings }
        </ul>
      </section>
    );
  }
}

export default MatchList;
