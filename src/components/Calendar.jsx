import React from "react";
import Event from "./Event";
const Calendar = () => {
    return (
        <div className="Calendar">
          <table>
  <thead>
       <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
      </tr>         
  </thead>
  <tbody>
  <tr>
          <td >8am</td>
          <Event event='Fancy Dinner 🎩' color ='green' location='Hotel'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">9am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Subway 🚊' color ='pink' location='Vanderbilt'/>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Tennessee'/>
      </tr>

      <tr>
          <td className="time">10am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Atlanta'/>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">11am</td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Newyork'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">12pm</td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Nigeria'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">1pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Nepal'/>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">2pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='Nashville'/>
          <td></td>
      </tr>

      <tr>
          <td className="time">3pm</td>
          <td></td>
          <td></td>
          <Event event='The Bean 🫘' color ='blue' location='alabama'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">4pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td className="time">5pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
  </tbody>
</table>
        </div>
      );
}
export default Calendar;