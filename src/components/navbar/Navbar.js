import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import profile2 from "../../assets/profile3.png";


export default function Navbar() {
  const [nav, setNav] = useState(false); // State to toggle mobile menu

  const toggleNav = () => setNav(!nav);

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
      href: "/Yusri_Nelson_CV.pdf",
      style: "rounded-br-md",
      downlaod: true,
    },
  ];

  return (
    <div>
 {/* Navbar Header with Burger Icon */}
 <div className="fixed top-0 w-full flex justify-end items-center px-7 py-4 text-white z-10">
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={toggleNav}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-[#0A1542] text-white z-20 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center space-y-2 px-1 pt-1">
          {/* Profile Section */}
          <a href="#home" className="box__color w-full h-[260px] rounded-md flex items-center justify-center flex-col">
            <div className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full border border-white">
              <img src={profile2} alt="profile" className="w-full h-full rounded-full bg-gray-500" />
            </div>
            <p>Yusri Nelson</p>
            <p className="text-center">Junior Fullstack Developer</p>
          </a>

          {/* Navigation Links */}
          <a href="#about" className="box__color navbar__heading-box">
            About
          </a>
          <a href="#skills" className="box__color navbar__heading-box">
            Skills
          </a>
          <a href="#projects" className="box__color navbar__heading-box">
            Projects
          </a>
          <a href="#contact" className="box__color navbar__heading-box">
            Contact
          </a>

          {/* Social Icons */}
          <ul className="flex space-x-4">
            {links.map(({ id, href, child, download }) => (
              <li key={id}>
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>




      <div className="hidden fixed w-[25vw] h-screen md:flex flex-col items-center space-y-4" >
        <a href="#home" className="box__color w-full h-[260px] rounded-md flex items-center justify-center flex-col">
          <div className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full border border-white">
            <img src={profile2} alt="profile" className="w-full h-full rounded-full bg-gray-500" />
          </div>
          <p>Yusri Nelson</p>
          <p className="text-center">Junior Fullstack developer</p>
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
          <ul className="flex items-center justify-center text-4xl space-x-4">
            {links.map(({ id, href, child, download }) => (
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
