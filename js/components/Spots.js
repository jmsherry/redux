import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TestActions from '../actions/TestActions';
import styles from '../../css/app.css';

class Spots extends Component {
  render() {
    // const {dispatch} = this.props;
    // const actions = bindActionCreators(TestActions, dispatch);
    return (
        <h1 className={styles.text}>Spots Component</h1>
    );
  }
}

export default connect((state) => state.Sample)(Spots)
