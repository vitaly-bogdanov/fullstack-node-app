import React, { FC, PropsWithChildren } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

interface Props {};

const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => (
  <>
    <Header/>
      <main>
        { children }
      </main>
    <Footer/>
  </>
);

export default MainLayout;