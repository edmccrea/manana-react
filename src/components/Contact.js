import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='container contact-container'>
      <div className='contact-info'>
        <div className='info-container'>
          <div className='contact-top'>
            <h1>Get in touch</h1>
            <p>
              Shoot us an email or contact us through our various social media
              platforms.
            </p>
          </div>
          <div className='contact-links'>
            <h2>Socials</h2>
            <div className='contact-link'>
              <a
                href='https://www.facebook.com/mananaacademy/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-facebook-f social-icon'></i>
                <span>Facebook</span>
              </a>
            </div>
            <div className='contact-link'>
              <a
                href='https://www.instagram.com/mananaacademy/?hl=en'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-instagram social-icon'></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className='contact-map'>
            <h2>Where to find us</h2>
            <p>Map</p>
          </div>
        </div>
      </div>

      <div className='contact-form'>
        <form action=''>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
          <label htmlFor='message'>Type your message here...</label>
          <input type='text' name='message' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
