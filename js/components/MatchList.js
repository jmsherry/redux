import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import * as BrowseActions from './../actions/BrowseActions';
import _ from 'lodash';


class MatchList extends Component {

  static contextTypes = {
    store: PropTypes.object
  };
  constructor(){
    super();
    this.state = {
      browse: {
        matches: {
          games: []
        }
      }
    };
  }
  componentWillMount(){
    BrowseActions.listMatches()(this.context.store.dispatch);
  }
  componentWillUpdate(){
    console.log('BrowseList componentWillUpdate', arguments);
  }
  componentWillUnmount(){
    BrowseActions.stopBrowsing()(this.context.store.dispatch);
  }
  render() {
    let matches = this.props.matches.games;
    // const { store } = this.context;
    // console.log('store', store);
    // console.log('context', this.context);
    console.log('props', this.props);
    console.log('matches', matches, matches[1]);

    //Process from firebase to arrays.
    // const matchesArray = [];
    // const matchNumbers = _.keys(matches);
    //   matchNumbers.forEach(function(n){
    //   matchesArray.push(matches[n]);
    // });
    const matchListings = matches.map(function(match){
      return (<Match key={match._id} match={match} />);
    });
    console.log('matchListings', matchListings);

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


//export default MatchList;
export default connect((state) => {
  console.log('Matchlist connect state', state);
  return state.browse;
})(MatchList);
