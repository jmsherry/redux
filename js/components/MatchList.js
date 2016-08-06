import React, {
  Component,
  PropTypes
} from 'react';
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
        matches: {}
      }
    };
  }
  componentWillMount(){
    const { store } = this.context;
    const matchesThunk = BrowseActions.listMatches();
    const matches = matchesThunk(store.dispatch);
    console.log('componentWillMount', matches);
    this.setState({matches});
  }
  componentWillUpdate(){
    console.log('BrowseList componentWillUpdate', arguments);
    //this.setState({matches});
  }
  componentWillUnmount(){
    const { store } = this.context;
    const stopThunk = BrowseActions.stopBrowsing();
    const stopped = stopThunk(store.dispatch);
  }
  render() {
    let matches = this.state.browse.matches.games;
    const { store } = this.context;
    console.log('store', store);
    console.log('this.store', this);
    console.log('context', this.context);
    console.log('props', this.props);
    console.log('state', this.state);
    console.log('matches', matches);

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

        </ul>
      </section>
    );
  }
}


export default MatchList;
