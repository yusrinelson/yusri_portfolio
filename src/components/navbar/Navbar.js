import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import profile2 from "../../assets/profile2.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="fixed w-[25vw] h-screen flex flex-col items-center space-y-4">
        <div className="box__color w-full h-[260px] rounded-md flex items-center justify-center flex-col">
            <div className="w-[170px] h-[170px] rounded-full border border-white">
            <img src={profile2} alt="profile" className="w-full h-full rounded-full" />
            </div>
            <p>Yusri Nelson</p>
            <p>Junior Web developer</p>
        </div>
        <div className="box__color navbar__heading-box">
          <p>About</p>
        </div>
        <div className="box__color navbar__heading-box">
          <p>Skills</p>
        </div>
        <div className="box__color navbar__heading-box">
          <p>Projects</p>
        </div>
        <div className="box__color navbar__heading-box">
          <p>Contact</p>
        </div>
        <div>
          <ul className="flex items-center justify-center text-4xl space-x-4">
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <ImProfile />
            </li>
            <li>
              <IoMdMail />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
