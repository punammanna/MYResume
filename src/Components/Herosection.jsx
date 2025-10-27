import React from "react";
import myProfilePic from "../assets/images/PunamManna.jpeg";

export const Herosection = () => {
  return (<>
  
    <div className="pt-40 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 relative">
      <div className="flex flex-col gap-6 text-center md:text-left">
      {/* <h1 className="mb-3 text-4xl md:text-[2.8rem] lg:text-6xl  font-bold font-special text-align: center">
          Full Stack Developer
        </h1>
         */}
        <h2 className="mb-2 text-xl md:text-2xl uppercase text-[#15d1e9] ;">
          Front-end Developer
        </h2>

        <h1 className="mb-3 text-4xl md:text-[2.8rem] lg:text-6xl text-orange-400 font-bold font-special">
          Punam Manna
        </h1>

        <p className="text-base md:text-xl leading-[2rem]">
          I’m a passionate Full Stack Developer developer looking for opportunity, and excieted to  work for people 
          
          <br />
          with expertise in DevOps, Linux, and AWS.
        </p>
      </div>

      <div>
        <img
          src={myProfilePic}
          alt="my_profile_image"
          className="h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400 shadow-lg max-h-[450px] w-auto"
        />
      </div>

      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-cyan/20 shadow-cyanMediumShadow -z-10 animate-pulse"></div>
    </div>
    </>

  );
};
