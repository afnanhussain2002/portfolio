import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-[url(https://i.ibb.co/MGmHGSW/Untitled-design-11.png)] bg-cover bg-center bg-no-repeat">
        <div classNameName="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[600px] lg:items-center lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              I am Afnan Hussain
              <strong className="block  font-extrabold text-main-color">
                A Web Developer
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Passionately dedicated to transforming creative concepts and innovative ideas into impeccably crafted, user-centric digital solutions.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-main-color px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Resume
              </a>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
