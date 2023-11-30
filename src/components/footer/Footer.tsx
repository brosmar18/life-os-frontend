import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className="footer__brand">
        <span>Life OS Dashboard</span>
      </div>
      <div className="footer__links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="footer__icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="footer__icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="footer__icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="footer__icon" />
        </a>
      </div>
      <div className="footer__info">
        <CopyrightIcon className="footer__icon" />
        <span>{`${currentYear} Bryan O. Garduno Gonzalez`}</span>
      </div>
    </footer>
  );
}

export default Footer;
