import React from "react";
import img from "../../../assets/images/logo/logo.jpg"

const Banner = () => {
  return (
    <div className="mt-20 mb-16 flex-col flex justify-center items-center">
      <div className="flex flex-col">
        <div className="avatar my-4">
          <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>
      </div>
        <h2 className="text-5xl capitalize font-bold text-center">Euhan sarkar</h2>
        <h2 className="text-2xl capitalize font-bold text-center">programmger</h2>
        <h2 className="text-2xl capitalize font-bold text-center">front-end javascript developer</h2>
    </div>
  );
};

export default Banner;
