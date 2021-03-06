import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import Header from './Header';
import Main from './Main';
//import Aside from './Aside';
import Footer from './Footer';

class Home extends Component {
  constructor(){
    super();
  }
  render() {
    const {title, dispatch} = this.props;
    //const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.mainWrapper}>
          <div className="row">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
// console.log(connect((state) => state.Sample));
export default connect((state) => {
  //console.log('HERE', state);
  return state;
})(Home);
