import React, {
  Component
} from 'react';

class Match extends Component {
  constructor(){
    super();
  }
  render() {
    const match = this.props.match;
    const player1= match.players[0];
    const player2= match.players[1];
    return (
      <li className="match">{player1.name} {player1.frames} ({player1.score}) - ({player2.score}) {player2.frames} {player2.name}</li>
    );
  }
}

export default Match;
