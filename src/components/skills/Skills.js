import React from 'react'
import { tech } from '../../constants'

export default function Skills() {
  return (
    <div className='box__color w-full h-fit md:h-[95%] rounded-md mt-4' id='skills' name="skills">
      <div className='flex justify-center mt-5'>
        <div className="pb-8">
          <p className="text-gray-400 ">explore my</p>
          <p
            className={`section__header-text leading-none`}
          >
            Skills
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 text-center py-4 px-3 sm:px-12">
                {tech.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="html" className="w-5 sm:w-10 mx-auto"/>
                    <p className="mt-2">{title}</p>
                </div>
                ))}
                
            </div>
    </div>
  )
}
