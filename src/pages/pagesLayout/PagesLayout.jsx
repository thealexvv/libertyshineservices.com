import { useRef } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const PagesLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PagesLayout;
