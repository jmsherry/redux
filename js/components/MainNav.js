import React, {Component} from 'react';
import NavLink from './NavLink';

class MainNav extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <ul>
        <li><NavLink to="/birds">Birds</NavLink></li>
        <li><NavLink to="/spots">Spots</NavLink></li>
      </ul>
    );
  }
};

export default MainNav;
