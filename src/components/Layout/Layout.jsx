import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppRouter from '../../routers/Router';

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/sign-up';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div>
        <AppRouter />
      </div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
