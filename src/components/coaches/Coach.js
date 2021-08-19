import React, { useState } from 'react';
import './Coach.css';
import CoachModal from './CoachModal';

const Coach = ({ coach }) => {
  const [coachDisplay, setCoachDisplay] = useState(false);

  const displayCoach = () => {
    setCoachDisplay(true);
    document.body.style.overflow = 'hidden';
    console.log('clicked');
  };

  return (
    <div className='coach' onClick={displayCoach}>
      <img src={coach.image} alt='' className='coach-img' />
      <div className='coach-info'>
        <h2 className='coach-name'>{coach.name}</h2>
        <p className='coach-discipline'>{coach.discipline}</p>
      </div>

      {coachDisplay && <CoachModal coach={coach} />}
    </div>
  );
};

export default Coach;