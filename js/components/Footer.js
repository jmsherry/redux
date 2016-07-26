import React from 'react';
import styles from '../../css/app.css';

function Footer(){
  return (
      <footer className={styles.mainFooter}>
        <div className="row">
          <p><small>&copy; Hivemind. All rights reserved.</small></p>
        </div>
      </footer>
  );
}

export default Footer;
