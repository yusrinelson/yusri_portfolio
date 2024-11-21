import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link, Outlet } from "react-router-dom";
import { layout } from "../style";
import { ReactTyped } from "react-typed";
import profile from "../../assets/profile3.png";


export default function Home() {

  return (
    <div className="box__color w-full h-[97vh] flex justify-between rounded-md px-10" id="home">
    <div className="flex flex-col justify-center" >
      <div className="ml-[5%] h-full flex flex-col justify-center">
        <h1 className="text-4xl">Hi, I am</h1>
        <h1 className="text-4xl">Yusri Nelson</h1>
        <h1 className="text-4xl mb-3 bg-gradient-to-r from-[#44BD03] via-[#00FFF2] to-[#00FFF2] bg-clip-text text-transparent">
          <ReactTyped
            strings={["Junior Fullstack Developer", "UI/UX Designer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>
        <p className="max-w-lg py-2 text-gray-500 ">
          I am dedicated to crafting dynamic and compelling web interfaces that captivate users. I possess the skills to architect responsive and intuitive websites. Committed to continuous growth, I approach challenges with a quick-learning mindset, constantly striving to expand my knowledge base and refine my expertise.
          </p>
        <a href="#projects" className={`group ${layout.buttongradient}`}>
          Projects
          <span className="duration-300 group-hover:rotate-90">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </a>
      </div>
      
    </div>
    <div className="flex items-center justify-center">
          <img
            src={profile}
            alt="profile"
            className="mx-auto mb-10 w-1/2 rounded-full md:w-[300px] border-[1px] sm:border-2 border-cyan-600 bg-gray-500"
          />
        </div>
    </div>
  );
}
