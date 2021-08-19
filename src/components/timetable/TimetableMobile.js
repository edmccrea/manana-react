import React, { Fragment } from 'react';
import './Timetable.css';

const TimetableMobile = () => {
  return (
    <Fragment>
      <table class='timetable'>
        <thead>
          <tr>
            <th></th>
            <th>BJJ</th>
            <th>Muay Thai</th>
            <th>MMA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>x</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>18:30 - 20:30</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>19:00 - 20:30</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>18:30 - 20:30</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>x</td>
            <td>x</td>
            <td>19:00 - 20:30</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>x</td>
            <td>12:00 - 13:30</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>12:00 - 13:30</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default TimetableMobile;
