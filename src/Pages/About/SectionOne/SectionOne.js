import React from "react";
import Lottie from "lottie-react";
import dev from "../../../assets/anime/dev.json";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={dev} className={`w-full md:w-1/2`} loop={true} />
        <div className="w-full">
          <h1 className="text-6xl capitalize font-bold">
            Hello i'm Nurul Islam Euhan,
            <Typewriter
              options={{
                strings: [" A Web Developer", "A Web Designer"],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(3000).start();
              }}
            ></Typewriter>
          </h1>
          <p className="py-6 w-full pr-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.p Provident cupiditate voluptatem et in. Quaerat fugiat.{" "}
            <br /> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat
            ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.p
          </p>
          <Link to={`/resume`}>
            <button className="btn btn-primary">
              download my resume <FaArrowRight className="font-bold mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
