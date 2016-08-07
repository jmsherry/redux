import React, {
  Component
} from 'react';

class Match extends Component {
  constructor(){
    super();
  }
  render() {
    const match = this.props.match;
    //console.log('match', match);
    return (
      <li key={this.props.key} className="match">{match.P1Name} {match.P1Points} ({match.P1Frames}) - ({match.P2Frames}) {match.P2Points} {match.P2Name}</li>
    );
  }
}

export default Match;
      //
      // <li className="match">{match.P1Name} {match.P1Frames} ({match.P1match.Points}) - ({match.P2match.Points}) {match.P2Frames} {match.P2Name}</li>
