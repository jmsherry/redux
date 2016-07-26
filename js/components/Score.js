import React, {
  Component
} from 'react';
import ScoringPanel from './ScoringPanel';
import styles from '../../css/app.css';

class Score extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div id="score">
        <ScoringPanel />
      </div>
    );
  }
}

export default Score;
