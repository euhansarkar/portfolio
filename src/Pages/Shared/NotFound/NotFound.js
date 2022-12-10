import React from "react";
import err from "../../../assets/anime/error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <div>
        <Lottie animationData={err} loop={true}></Lottie>
        <h2 className="font-bold text-center text-4xl">
          back to{" "}
          <Link to={`/`}>
            <span className="text-yellow-400 text-center">home page</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
