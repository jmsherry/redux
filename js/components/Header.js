import React, {
  Component
} from 'react';
import MainNav from './MainNav';
import NavLink from './NavLink';
import styles from '../../css/app.css';

class Header extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <header className={styles.mainHeader}>
        <div className="row">
          <div className="top-bar">
            <div className="top-bar-title">
              {/*<span data-responsive-toggle="responsive-menu" data-hide-for="medium">
                <button className="menu-icon dark" type="button" data-toggle></button>
              </span>*/}
              <NavLink to="/"><strong>SnookerApp</strong></NavLink>

            </div>
            <div className="title-bar-right">
              <MainNav />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
