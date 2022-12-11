import React from "react";
import html from "../../../assets/svg/html-svgrepo-com.svg";
import css from "../../../assets/svg/css-3-logo-svgrepo-com.svg";
import js from "../../../assets/svg/js-svgrepo-com.svg";
import ts from "../../../assets/svg/typescript-svgrepo-com.svg";
import bs from "../../../assets/svg/bootstrap-4-logo-svgrepo-com.svg";
import tw from "../../../assets/svg/tailwindcss-icon-svgrepo-com.svg";
import node from "../../../assets/svg/node-svgrepo-com.svg";
import next from "../../../assets/svg/nextjs-svgrepo-com.svg";
import mongo from "../../../assets/svg/mongo-svgrepo-com.svg";
import react from "../../../assets/svg/react-svgrepo-com.svg";
import router from "../../../assets/svg/react-router-svgrepo-com.svg";
import exp from "../../../assets/svg/expressjs-ar21.svg";

const SectionTwo = () => {
  return (
    <div className="mt-20 mb-32">
      <h2 className="text-4xl text-center capitalize text-yellow-500">technology we use!</h2>
      <div className="flex items-center justify-center">
        <div className="flex space-x-20 w-3/5 space-y-12 flex-wrap items-center justify-center">
          <img src={css} className="w-12 self-center" alt="" />
          <img src={html} className="w-12 text-center" alt="" />
          <img src={js} className="w-12 self-center" alt="" />
          <img src={bs} className="w-12 self-center" alt="" />
          <img src={tw} className="w-12 self-center" alt="" />
          <img src={ts} className="w-12 self-center" alt="" />
          <img src={node} className="w-12 self-center" alt="" />
          <img src={next} className="w-12 self-center" alt="" />
          <img src={mongo} className="w-12 self-center" alt="" />
          <img src={react} className="w-12 self-center" alt="" />
          <img src={router} className="w-12 self-center" alt="" />
          <img src={exp} className="w-12 self-center" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
