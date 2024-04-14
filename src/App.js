import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';


import { Outlet } from "react-router-dom";

function App() {

  return (
   <div className='flex'>
    <Sidebar/>
    <Outlet/>
   
   </div>
  );
}

export default App;
