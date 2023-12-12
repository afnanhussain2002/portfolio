import Link from "next/link";
import React from "react";


const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto" id="about">
    <h2 className="text-center text-4xl font-bold text-main-color">About Me</h2>
    <p className="text-center font-extrabold text-main-color">----</p>
    <div className="hero sm:h-auto md:h-[600px] bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/dkKXvVB/Whats-App-Image-2023-12-09-at-15-23-17-43d9efca.jpg" className="max-w-sm rounded-2xl shadow-2xl border border-main-color"/>
    <div className="md:ml-14">
      <h1 className="text-5xl font-bold">Greetings, This is Afnan Hussain,</h1>
      <p className=" md:py-6 text-xl"> a driven individual hailing from the vibrant landscapes of Bangladesh. Embarking on a journey of technological exploration, my ambition is to master the realm of Full Stack Web Development, particularly leveraging the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
     <button className="btn text-white bg-main-color">My Skills</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default AboutSection;
