import React, { Fragment } from 'react';
import './Timetable.css';

const TimetableLarge = () => {
  return (
    <Fragment>
      <table class='timetable'>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BJJ</td>
            <td>x</td>
            <td>18:30 - 20:30</td>
            <td>19:00 - 20:30</td>
            <td>18:30 - 20:30</td>
            <td>x</td>
            <td>x</td>
            <td>12:00 - 13:30</td>
          </tr>
          <tr>
            <td>Muay Thai</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
            <td>x</td>
            <td>12:00 - 13:30</td>
            <td>x</td>
          </tr>
          <tr>
            <td>MMA</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>19:00 - 20:30</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default TimetableLarge;
