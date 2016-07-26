import React, {
  Component
} from 'react';
import MainNav from './MainNav';
import Player from './Player';
import FrameCounter from './FrameCounter';
import AppControls from './AppControls';
import styles from '../../css/app.css';
import Balls from './Balls';

const players = [
  {
    name: 'Steve Davis',
    frames: 2,
    score: 36,
    avatarURL: 'https://pbs.twimg.com/profile_images/378800000754155554/deee6a6015a2a601dcdcfac075b35191_400x400.jpeg'
  }, {
    name: 'Steven Hendry',
    frames: 4,
    score: 6,
    avatarURL: 'https://pbs.twimg.com/profile_images/1189081560/imagesnj_400x400.jpg'
  }];

class ScoringPanel extends Component {
  constructor(){
    super();
    this.state = {
      players: players
    };
  }
  render() {
    const player1 = this.state.players[0];
    const player2 = this.state.players[1];
    return (
      <form id="scoring-panel">
        <div className="balls">
          <Balls />
        </div>
        <div className={styles.leftPanel}>
          <Player player={player1} />
        </div>
        <div className={styles.centerPanel}>
          <FrameCounter />
          <AppControls />
        </div>
        <div className={styles.rightPanel}>
          <Player player={player2} />
        </div>
      </form>
    );
  }
}

export default ScoringPanel;
