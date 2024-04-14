import React from 'react'
import AddProject from '../Components/AddProject'
import ShowProjects from '../Components/ShowProjects'

function Project() {
  return (
    <div className="flex justify-center  h-screen flex-grow bg-gray-500 p-3">
    <div className="flex flex-col items-center flex-grow">
    <h1 className='text-black text-4xl'>Projects</h1>
      <AddProject />
      <div class="border border-gray-900 w-full"></div>

      <ShowProjects />
      
    </div>
  </div>
  )
}

export default Project