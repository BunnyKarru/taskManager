import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { addHours } from '../store/ProjectSlice';
import { add } from '../store/CalenderSlice';







const AddHours = () => {
  const dispatch = useDispatch();
  const [hours, setHours] = useState({});
  const projects = useSelector((state) => state.projectManager.projects);
  const dateOfHours=useSelector((state)=>state.workManager.date);
  console.log(dateOfHours);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHours({ ...hours, [name]: parseInt(value) || 0 });
  };
 let totalHours ;
 

  return (
    <div className="flex flex-col gap-4">
      <h2>Add Hours</h2>
      {projects.map((project) => (
        <div key={project.id} className="flex items-center border border-gray-300 rounded px-4 py-2">
          <label htmlFor={project.id} className="text-sm font-medium mr-4 text-gray-700">
            {project.projectName}:
          </label>
          <input
            type="number"
            id={project.id}
            name={project.id}
            value={hours[project.id] || 0}
            onChange={(event) => handleChange(event)}
            placeholder='Enter the no of hours worked'
            min="0"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() =>{
                totalHours= Object.values(hours).reduce((sum, value) => sum + value, 0);
                dispatch(addHours({ projectId: project.id, hours: hours[project.id] }))}
            } 
            className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Hours
          </button>
        </div>
      ))}
      <button
            type="button"
            onClick={() =>{
                
                dispatch(add({date:dateOfHours,hours:hours}))}
            } 
            className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add to Day
          </button>
    </div>
  );
};

export default AddHours;
