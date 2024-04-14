import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center items-center h-screen flex-grow bg-gray-400">
      <div className="text-center bg-white">
        <Calendar onChange={setDate} value={date} className="mx-auto w-full " />
      </div>
    </div>
  );
}

export default Calender;