import React, { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
// import forevercare_img from "../../assets/forevercare_img.png";
import { fullstack } from "../../constants/index";
import { layout } from "../style";

export default function Fullstack() {
    const [showDescription, setShowDescription] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = (e) => {
        const vid = e.target;
        if (!isPlaying) {
            vid.muted = true;
            vid.play().then(() => setIsPlaying(true)).catch((err) => console.error('Error playing video:', err));
        }
    };

    const handleMouseLeave = (e) => {
        const vid = e.target;
        if (isPlaying) {
            vid.muted = false;
            vid.pause();
            setIsPlaying(false);
        }
    };

    const toggleDescription = (id) => {
        setShowDescription(showDescription === id ? null : id);
    };

    const projectId = fullstack.find((item) => item.id === showDescription);

    return (
        <div className=' font-bold'>
            {/* View More Overlay */}
            {showDescription !== null && projectId && (
                <div className="fixed top-0 left-0 w-full h-full text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] md:w-[50%]">
                        <h2 className="text-xl font-bold mb-4">{projectId.title}</h2>
                        <video
                            src={projectId.src}
                            controls
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="rounded-md duration-200 hover:scale-105 w-full"
                        />
                        <p className="mt-4">{projectId.description}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                            onClick={() => toggleDescription(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-wrap items-center justify-between px-4">
                {fullstack.map(({ id, src, site, github, title, description }) => (
                    <div
                        key={id}
                        className="w-[300px] h-[200px] bg-black/70 mb-2 rounded-md shadow-md shadow-gray-600 mr-4"
                    >
                        {/* <div className="relative"></div> */}
                        <div className="flex flex-row h-[80%]">
                            <div className="w-[90%] h-full text-center">
                                <video
                                    src={src}
                                    controls
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="duration-200 hover:scale-105 "
                                />
                            </div>
                            <div className=" w-[10%] flex flex-col justify-center items-center space-y-4 text-[1.2rem]">
                                <a href={github} target="_blank" rel="noreferrer">
                                    <BsGithub />
                                </a>
                                <BiInfoCircle
                                    onClick={() => toggleDescription(id)}
                                    className={layout.projectButton}
                                />
                                <a href={site} target="_blank" rel="noreferrer">
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[20%] text-center flex items-center justify-center bg-gradient-to-r from-[#44BD03] via-[#00FFF2] to-[#00FFF2] text-black font-extrabold">
                            {title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}