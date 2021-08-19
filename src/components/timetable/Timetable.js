import React from 'react';
import TimetableLarge from './TimetableLarge';
import TimetableMobile from './TimetableMobile';

const Timetable = () => {
  return (
    <div className='container'>
      <h1 className='page-title'>Timetable</h1>
      <TimetableLarge />
      {/* <TimetableMobile /> */}
    </div>
  );
};

export default Timetable;
