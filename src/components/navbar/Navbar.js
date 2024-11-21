import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import profile2 from "../../assets/profile3.png";


export default function Navbar() {
 
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yusri-nelson/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/yusrinelson",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:yusrinelson17@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Yusri-Nelson-Resume.pdf",
      style: "rounded-br-md",
      downlaod: true,
    },
  ];

  return (
    <div>
      <div className="fixed w-[25vw] h-screen flex flex-col items-center space-y-4" >
        <a href="#home" className="box__color w-full h-[260px] rounded-md flex items-center justify-center flex-col">
            <div className="w-[170px] h-[170px] rounded-full border border-white">
            <img src={profile2} alt="profile" className="w-full h-full rounded-full bg-gray-500" />
            </div>
            <p>Yusri Nelson</p>
            <p>Junior Fullstack developer</p>
        </a>
        <a href="#about" className="box__color navbar__heading-box">
           <p>About</p>
        </a>
        <a href="#skills" className="box__color navbar__heading-box">
           <p>Skills</p>
        </a>
        <a href="#projects" className="box__color navbar__heading-box">
           <p>Projects</p>
        </a>
        <a href="#contact" className="box__color navbar__heading-box">
           <p>Contact</p>
        </a>

        <div>
          <ul  className="flex items-center justify-center text-4xl space-x-4">
          {links.map(({id, href, child, download}) => (
            <li key={id}>
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
            </li>
          ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
}
