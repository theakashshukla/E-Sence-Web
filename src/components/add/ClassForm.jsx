import { useState } from 'react';

import { collection } from 'firebase/firestore';
import { db } from '../../firebase';

const ClassesForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState(1);
  const [days, setDays] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [times, setTimes] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const classesRef = collection(db, "classes");
    classesRef
        .add({
            name,
            description,
            week,
            days,
            })
        .then((docRef) => {
            console.log("Class written with ID: ", docRef.id);
        })
      .catch((error) => {
        console.error("Error adding class: ", error);
      });

    // Clear form
    setName("");
    setDescription("");
    setWeek(1);
    setDays([]);
    setDayOfWeek("");
    setTimes([]);
    setStartTime("");
    setEndTime("");
  };

  const handleAddDay = (e) => {
    e.preventDefault();

    const newDay = { dayOfWeek, times };
    setDays([...days, newDay]);

    // Clear day input fields
    setDayOfWeek("");
    setTimes([]);
    setStartTime("");
    setEndTime("");
  };

  const handleAddTime = (e) => {
    e.preventDefault();

    const newTime = { startTime, endTime };
    setTimes([...times, newTime]);

    // Clear time input fields
    setStartTime("");
    setEndTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Week:
        <input
          type="number"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
        />
      </label>
      <br />
      {days.map((day, index) => (
        <div key={index}>
          <h3>{day.dayOfWeek}</h3>
          <ul>
            {day.times.map((time, index) => (
              <li key={index}>
                {time.startTime} - {time.endTime}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <label>
        Day of week:
        <input
          type="text"
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
        />
      </label>
      <br />
      {times.map((time, index) => (
        <div key={index}>
          <p>
            {time.startTime} - {time.endTime}
          </p>
        </div>
      ))}
      <label>
        Start time:
        <input
          type="text"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        End time:
        <input
          type="text"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddTime}>Add Time</button>
      <button onClick={handleAddTime}>Add Time</button>
      <br />
      <button onClick={handleAddDay}>Add Day</button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClassesForm;
