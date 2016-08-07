import React, {
  Component
} from 'react';
import MatchList from './MatchList';
import styles from '../../css/app.css';

class Browse extends Component {
  constructor(){
    super();
  }
  render() {
      let matches = {games:[]};
    return (
      <div>
        <h1>Browse Matches</h1>
        <MatchList />
      </div>
    );
  }
}

export default Browse;
