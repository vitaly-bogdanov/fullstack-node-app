import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './Header.module.scss';

const Header: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <h1 className={styles.headTitle}>Simple-spa</h1>
    </Toolbar>
  </AppBar>
);

export default Header;