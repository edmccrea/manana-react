import React from 'react';
import Coach from './Coach';
import './Coaches.scss';
import coaches from '../../utils/coaches';

const Coaches = () => {
  return (
    <div className='coaches-container container'>
      <h1 className='page-title'>Instructors</h1>
      <div className='grid-wrapper'>
        {coaches.map((coach) => (
          <Coach coach={coach} key={coach.name} />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
