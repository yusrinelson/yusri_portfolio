import React from "react";

export default function Home() {
  return (
        <div className="box__color w-full h-[98vh] rounded-md flex flex-col justify-center ">
            <div className="ml-[20%] h-full flex flex-col justify-center">
                <h1 className="text-4xl">Hi, I am</h1>
                <h1 className="text-4xl">Yusri Nelson</h1>
                <h1 className="text-4xl mb-3 bg-gradient-to-r from-[#44BD03] to-[#00FFF2] bg-clip-text text-transparent">Fullstack Developer</h1>
                <span className="text-2xl bg-gradient-to-r from-blue-800 to-blue-600 p-2 rounded-md w-fit ">Projects</span>
            </div>
        </div>
  );
}
