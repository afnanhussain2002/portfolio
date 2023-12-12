import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs,SiMongodb } from "react-icons/si";



const Progressbar = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4">
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-orange-500 md:text-5xl"><FaHtml5/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={80}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-[#1198D2] md:text-5xl"><FaCss3/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={70}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-yellow-500 md:text-5xl"><IoLogoJavascript/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={65}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-[#1198D2] md:text-5xl"><FaReact/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={75}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-green-400 md:text-5xl"><IoLogoNodejs/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={65}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl md:text-5xl"><SiNextdotjs/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={50}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-green-500 md:text-5xl"><SiMongodb/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={70}
        max="100"
      ></progress>
        
        </div>  
      <div className="flex items-center gap-4">
    <h3 className="font-bold text-3xl text-sky-500 md:text-5xl"><FaWordpress/></h3>
      <progress
        className="progress progress-accent w-32 h-5 md:w-56"
        value={90}
        max="100"
      ></progress>
        
        </div>  
    
    </div>
  );
};

export default Progressbar;
