import Navbar from '../components/navbar/Navbar';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import '../styles/globals.scss';

const Layout = () => (
  <div className='page'>
    <Navbar />
    <div className='container'>
      <div className='container__menu'>
        <Menu />
      </div>
      <div className='container__content'>
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
