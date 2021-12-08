import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='page-title'>Contact</h1>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='info-container'>
            <div className='contact-top'>
              <h2>Get in touch</h2>
              <p>
                Have some questions regarding classes, experience, facilities,
                or anything else? Shoot us an email or contact us through our
                various social media platforms.
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
                  <div className='icon-box'>
                    <i className='fab fa-facebook-f social-icon'></i>
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
              <div className='contact-link'>
                <a
                  href='https://www.instagram.com/mananaacademy/?hl=en'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='icon-box'>
                    <i className='fab fa-instagram social-icon'></i>
                  </div>
                  <span>Instagram</span>
                </a>
              </div>
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

      <div className='map-details'>
        <h2>Where to find us</h2>

        <div className='map-container'>
          <div className='contact-map'>
            <iframe
              className='map'
              title='map'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=Bj%C3%B6rnstjernegatan%2018,%20271%2039Ystad&t=&z=15&ie=UTF8&iwloc=&output=embed'
              scrolling='no'
            />
          </div>
          <div className='address-text'>
            <p>KFUM Huset</p>
            <p>Björnstjernegatan 18</p>
            <p>Ystad</p>
            <p>271 39</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
