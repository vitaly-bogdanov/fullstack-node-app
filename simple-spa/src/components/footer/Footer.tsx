import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import styles from './Footer.module.scss';

const Footer: FC = () => (
  <div className={styles.footer}>
    <Container>
      <div className={styles.box}>
        <p className={styles.text}>Simple-spa</p>
        <p className={styles.text}>2021</p>
      </div>
    </Container>
  </div>
);

export default Footer;