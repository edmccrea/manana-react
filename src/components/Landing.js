import React from 'react';
import './Landing.scss';
import bjj from '../imgs/bjj.jpg';
import kfum from '../imgs/kfum.png';
import rebelz from '../imgs/rebelz.png';
import coaches from '../utils/coaches';

import Coach from './coaches/Coach';
import Accordian from './faq/Accordian';

const Landing = () => {
  return (
    <div className='landing-container'>
      <section className='hero'>
        <div className='hero-text'>
          <h1>Mañana Academy</h1>
          <h2>Brazilian Jiu-Jitsu, Muay Thai and MMA</h2>
          <p className='hero-brief'>
            Established in 2018, Mañana Academy is the home of BJJ in Ystad,
            Sweden. We welcome practitioners of all ages and skill levels.
          </p>
          <p className='hero-quote'>
            "Ten years is gonna go by either way - might as well be a black belt
            in BJJ"
          </p>
          <a className='btn' href='#about'>
            Learn More <i className='fas fa-angle-double-down'></i>
          </a>
        </div>
        <div className='hero-img'>
          <img src={bjj} alt='' />
        </div>
      </section>

      <section className='about' id='about'>
        <div className='about-container section-container'>
          <h2>About</h2>
          <div className='about-sections'>
            <div className='about-text'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis mollitia voluptas tenetur non, molestias, molestiae
                repellendus quaerat quis commodi, reprehenderit ab rem nobis?
                Est in, reprehenderit laborum nemo dolores pariatur sequi non.
                Corrupti rerum, possimus praesentium ipsa aliquam amet sit.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus modi rerum aperiam? Dolor maiores blanditiis ipsum
                nesciunt voluptatem nihil quisquam impedit, cumque nisi quaerat
                facere quasi nemo hic eius a.
              </p>
            </div>
            <div className='about-links'>
              <h3>Find out more...</h3>
              <a className='btn links-btn' href='/classes'>
                Classes
              </a>
              <a className='btn links-btn' href='/timetable'>
                Timetable
              </a>
              <a className='btn links-btn' href='/pricing'>
                Pricing
              </a>
              <a className='btn links-btn' href='/contact'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='landing-instructors'>
        <div className='instructors-container section-container'>
          <h2>Our Instructors</h2>
          <div className='card-container'>
            <Coach coach={coaches[0]} />
            <Coach coach={coaches[1]} />
            <Coach coach={coaches[2]} />
          </div>
          <div className='instructors-btn'>
            <a className='btn' href='/instructors'>
              View All Instructors
            </a>
          </div>
        </div>
      </section>

      <section className='faq'>
        <div className='faq-container section-container'>
          <h2>Frequently Asked Questions</h2>
          <Accordian />
        </div>
      </section>

      <section className='sponsors'>
        <div className='sponsor-imgs'>
          <a href='https://kfum.se/' target='_blank' rel='noreferrer'>
            <img src={kfum} alt='' />
          </a>
          <a href='https://rebelz.se/' target='_blank' rel='noreferrer'>
            <img src={rebelz} alt='' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Landing;
