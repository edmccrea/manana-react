import React, { useState, Fragment } from 'react';
import './Coach.scss';
import CoachModal from './CoachModal';

const Coach = ({ coach }) => {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    if (showModal) {
      setShowModal(false);
      document.body.style.overflow = 'scroll';
    }

    if (!showModal) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <Fragment>
      <div className='coach' onClick={modalHandler}>
        <img src={coach.image} alt='' className='coach-img' />
        <div className='coach-info'>
          <h3 className='coach-name'>{coach.name}</h3>
          <p className='coach-discipline'>{coach.discipline}</p>
        </div>
      </div>
      {showModal && <CoachModal coach={coach} modalHandler={modalHandler} />}
    </Fragment>
  );
};

export default Coach;
