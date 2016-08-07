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
    console.log('props', this.props);
    console.log('matches', matches);

    const matchListings = matches.map(function(match, i){
      return (<Match key={i} match={match} />);
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


//export default MatchList;
export default connect((state) => {
  console.log('Matchlist connect state', state);
  // if(!state.browse.matches){
  //   state.browse.matches = {
  //     games: []
  //   };
  // }
  return state.browse;
})(MatchList);
