import React, {Component} from 'react';
import NavLink from './NavLink';

class MainNav extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <ul className="dropdown menu" data-dropdown-menu>
        <li><NavLink to="/browse">List Matches</NavLink></li>
        <li><NavLink to="/score">New Match</NavLink></li>
      </ul>
    );
  }
};

export default MainNav;
