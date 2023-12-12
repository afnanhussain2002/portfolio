import React from "react";

export default function Projects() {
  return (
    <section className="bg-white mt-8">
     <h2 className="text-center text-4xl font-bold text-main-color">About Me</h2>
    <p className="text-center font-extrabold text-main-color">----</p>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}
          <a
            href="https://drivecraft-636f5.web.app/"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/LdfgJSw/Screenshot-50.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
            <div className="pb-3">
                <a href="https://drivecraft-636f5.web.app/"><button className="btn text-white bg-main-color">Live Link</button></a>
                <a href="https://github.com/afnanhussain2002/drive-craft-client-side.git"><button className="btn text-white bg-main-color">Code Link</button></a>
            </div>
          </a>
          <a
            href="https://event-managements-b6707.web.app/"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/grKzBCb/Screenshot-51.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
            <div className="pb-3">
                <a href="https://event-managements-b6707.web.app/"><button className="btn text-white bg-main-color">Live Link</button></a>
                <a href="https://github.com/afnanhussain2002/event-horizon.git"><button className="btn text-white bg-main-color">Code Link</button></a>
            </div>
          </a>
        </div>
      </div>
    </section>
  
  )};