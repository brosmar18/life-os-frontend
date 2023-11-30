import Navbar from '../components/navbar/Navbar';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className='page'>
    <Navbar />
    <div className='container'>
      <div className='menu'>
        <Menu />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
