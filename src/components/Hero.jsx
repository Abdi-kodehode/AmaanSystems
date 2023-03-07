import React from "react";
import { Ri24HoursFill, RiRemoteControlLine } from "react-icons/ri" 
import { MdBuild, MdSecurity } from "react-icons/md"
import heroImage from "../assets/cyber-bg.png"

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Advanced security</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Amaan Systems
          </h1>
          <p className="text-2xl">Professionally installed.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={heroImage} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-sky-50
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p className="text-sky-500">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="gap-2 flex px-4 py-2 text-slate-500">
              <MdSecurity className="h-6 text-sky-500" /> Security
            </p>
            <p className="gap-2 flex px-4 py-2 text-slate-500">
              <MdBuild className="h-6 text-sky-500" /> Conveniant installation
            </p>
            <p className="gap-2 flex px-4 py-2 text-slate-500">
              <RiRemoteControlLine className="h-6 text-sky-500" /> Complete control
            </p>
            <p className="gap-2 flex px-4 py-2 text-slate-500">
              <Ri24HoursFill className="h-6 text-sky-500" /> 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
