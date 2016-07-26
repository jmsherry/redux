import React, {
  Component
} from 'react';
import MainNav from './MainNav';

class Browse extends Component {
  constructor(){
    super();
  }
  render() {
    const player = this.props.player;
    return (
      <div className="player">
        <div className="avatar">
          <img src={ player.avatarURL } alt={ player.name } />
          <div className="info">
            <h1>{ player.name }</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Browse;
