import React from 'react'
import { layout } from '../style'
export default function Contact() {
  return (
    <div className=" box__color w-full h-fit md:h-[95%] rounded-md mt-4 mb-3" id='contact'>
      <div className='flex justify-center mt-5'>
        <div className="pb-4">
          <p className="text-gray-400 ">get in touch</p>
          <p
            className={`section__header-text leading-none`}
          >
            Contact
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/pbqgddgb"
            method="POST"
            className="md:1/2 flex w-[80%] flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="enter your full name"
              required
              className={layout.inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              className={layout.inputStyle}
            />
             <input
              type="text"
              name="subject"
              placeholder="subject"
              required
              className={layout.inputStyle}
            />
            <textarea
              name="message"
              placeholder="enter your message"
              rows="7"
              required
              className={layout.inputStyle}
            ></textarea>

            <button
              type="submit"
              className={`mx-auto ${layout.buttongradient}`}
            >
              Lets Talk
            </button>
          </form>
        </div>
    </div>
  )
}
