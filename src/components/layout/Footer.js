import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-info'>
        <p>LOGO</p>
        <a href='/faq'>
          <p>FAQ</p>
        </a>
        <a href='/pricing'>
          <p>Pricing</p>
        </a>
        <p>Location</p>
      </div>
      <div className='footer-socials'>
        <div className='socials'>
          <a
            href='https://www.facebook.com/mananaacademy/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-f social-link'></i>
          </a>
          <a
            href='https://www.instagram.com/mananaacademy/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-instagram social-link'></i>
          </a>
          {/* <a href=""><i class='fab fa-instagram'></i></a> */}
        </div>
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
