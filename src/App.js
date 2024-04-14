import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Project from './Pages/Project';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calender from './Components/Calender';

function App() {

  return (
   <div className='flex'>
    <Sidebar/>
   <Calender/>
   </div>
  );
}

export default App;
