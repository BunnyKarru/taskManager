import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/ProjectSlice';


const AddProject= () => {
  const [projectName, setProjectName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setProjectName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!projectName.trim()) return; // Don't add empty project names
    dispatch(addProject(projectName))
    setProjectName('');
  };

  return (
<form onSubmit={handleSubmit} className="flex items-center mt-12 w-full mb-4">
  <input
    type="text"
    className="flex-grow w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
    placeholder="Enter a Project Name"
    value={projectName}
    onChange={handleChange}
    style={{ minWidth: '200px' }} // Adjust the minWidth as needed
  />
  <button
    type="submit"
    className="ml-4 text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
  >
    Add 
  </button>
</form>

  );
};

export default AddProject;
