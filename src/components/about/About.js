import React from 'react'

export default function About() {
  return (
    <div className="section__box" id='about'>
      <div className='flex justify-center mt-10'>
        <div className="pb-8">
          <p className="text-gray-400 ">get to know more</p>
          <p
            className={`section__header-text leading-none`}
          >
            About Me
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center mx-8 space-x-2'>
        <div className='bg-black/40 rounded-md'>
          <p className="md:text-xl p-4">
            I am an aspiring individual specializing in Software
            Development, with a robust skill set in various programming languages and frameworks. Currently, I am actively pursuing opportunities for a Junior
            Web Development position where I can leverage my proficiency and
            enthusiasm for learning. As a motivated individual with a proactive
            approach to challenges, I bring strong communication skills and a
            collaborative mindset to any team environment. My adaptability and
            quick learning abilities allow me to thrive in dynamic settings,
            ensuring I contribute effectively to project goals.
          </p>
        </div>

        <div className='bg-black/40 rounded-md'>
          <p className="md:text-xl p-4">
            I am deeply committed to continuous improvement and believe in the
            importance of staying updated with emerging technologies in the
            ever-evolving landscape of web development. My passion for making a
            positive impact extends beyond coding, as I enjoy engaging in outdoor
            activities and occasional gaming, which also serve to refresh and
            recharge my creativity. I am eager to bring my dedication, skills, and
            positive attitude to a team where I can contribute to meaningful
            projects while furthering my professional growth.
          </p>
        </div>
      </div>
    </div>
  )
}
