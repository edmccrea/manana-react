import React, { Fragment } from 'react';
import './Timetable.scss';

const TimetableLarge = () => {
  return (
    <Fragment>
      <table class='timetable timetable-desktop'>
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
          <tr>
            <td>Kids Muay Thai*</td>
            <td>x</td>
            <td>17:30 - 18:30</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>11:00 - 12:00</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>

      <table class='timetable timetable-mobile'>
        <thead>
          <tr>
            <th></th>
            <th>BJJ</th>
            <th>Muay Thai</th>
            <th>MMA</th>
            <th>Kids Muay Thai*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>x</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>18:30 - 20:30</td>
            <td>x</td>
            <td>x</td>
            <td>17:30 - 18:30</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>19:00 - 20:30</td>
            <td>17:30 - 19:00</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>18:30 - 20:30</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>x</td>
            <td>x</td>
            <td>19:00 - 20:30</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>x</td>
            <td>12:00 - 13:30</td>
            <td>x</td>
            <td>11:00 - 12:00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>12:00 - 13:30</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default TimetableLarge;
