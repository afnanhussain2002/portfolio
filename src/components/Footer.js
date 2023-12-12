import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-main-color text-neutral-content mt-10 grid justify-around">
      <aside>
      <a className=" text-white font-bold text-xl">Afnan Hussain</a>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
           <FaFacebook/>
          </a>
          <a>
           <FaYoutube/>
          </a>
          <a>
           <FaLinkedin/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
