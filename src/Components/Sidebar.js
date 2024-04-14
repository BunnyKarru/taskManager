import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import 'react-calendar/dist/Calendar.css';
import Calender from './Calender';
const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const projects = useSelector((state) => state.projectManager.projects);

  

  return (
    <div className="flex">
      
      <div id="sidebar" className={`sidebar bg-gray-600 w-64 min-h-screen p-6 ${sidebarOpen ? '' : 'hidden'} md:block`}>
        <div className="section mb-6">
          <div className="section-title text-xl font-bold mb-2">Projects</div>
          {
            projects.map((project)=>(
              <div className="project bg-gray-300 p-2 rounded mb-2 overflow-hidden">{project.projectName}</div>

            ))
          }
          
        </div>
        <div className="section mb-6">
          <div className="section-title text-xl font-bold mb-2">Task Sheet</div>
          
        </div>
        <div className="section">
          <div className="section-title text-xl font-bold mb-2">Calendar</div>
          
        </div>
      </div>
      <div className='flex justify-center align-middle bg-gray-500'>
     <button className="md:hidden" onClick={()=>{toggleSidebar()}}>
     {
          sidebarOpen ?<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        }

     </button>

      

      
        
      </div>
    </div>
  );
};

export default Sidebar;
