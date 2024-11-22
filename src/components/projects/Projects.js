import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Projects() {
  return (
    <div className=" group box__color w-full rounded-md mt-4 pb-4" id='projects' name="projects">
      <div className='flex justify-center mt-8'>
        <div className="pb-8">
          <p className="text-gray-400 ">browse my recent</p>
          <p
            className={`section__header-text leading-none`}
          >
            Projects
          </p>
        </div>
      </div>
      <div className='flex ml-2 md:ml-10 mb-4 '>
        <Link to="/frontend"><h4 className='projects__sub-header'>Frontend</h4></Link>
        <Link to="/backend"><h4 className='projects__sub-header'>Backend</h4></Link>
        <Link to="/fullstack"><h4 className='projects__sub-header'>Fullstack</h4></Link>
      </div>

      <div className='flex flex-wrap items-center justify-between px-4 '>
        <Outlet />
      </div>
    </div>
  )
}
