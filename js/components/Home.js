import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

class Home extends Component {
  constructor(){
    super();
  }
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <div>
        <Header />
        {this.props.children}
        <Aside />
        <Footer />
      </div>
    );
  }
}
console.log(connect((state) => state.Sample));
export default Home;//connect((state) => state.Sample)(Home);
