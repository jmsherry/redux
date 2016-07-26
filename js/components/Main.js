import React, {Component} from 'react';
import styles from '../../css/app.css';

class Main extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>Welcome to Snooker App</h1>
        <p>This app allows you to see the results in real-time or score a game yourself for others to see!</p>
        <p>Choose your option from the menu top right!</p>
      </div>
    );
  }
};

export default Main;
