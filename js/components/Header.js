import React, {
  Component
} from 'react';
import MainNav from './MainNav';

class Header extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <header>
        <div className="row">
          <h1>My Site</h1>
          <MainNav />
        </div>
      </header>
    );
  }
}

export default Header;
