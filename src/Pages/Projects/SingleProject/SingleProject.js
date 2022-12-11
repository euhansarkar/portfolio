import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiLiveLine } from "react-icons/ri";
import { CgBrowser } from "react-icons/cg";
import { FiServer } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const SingleProject = ({ project }) => {
  const { name, description, images, links, _id } = project;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="card min-w-20 card-compact shadow-xl"
    >
      <Link to={`/projects/${_id}`}>
        <figure>
          <img src={images[0]} className={`h-72`} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <motion.h2
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: `tween`, duration: 2}}
          className="card-title"
        >
          {name}
        </motion.h2>
        <p>
          {description.length > 120
            ? description.slice(0, 120).concat(`...`)
            : description}
        </p>
        <div className="card-actions flex items-center justify-evenly btn-group btn-group-vertical lg:btn-group-horizontal my-2">
          <a
            href={`${links[0]?.live}`}
            target={`_blank`}
            className="btn btn-sm btn-outline btn-error"
          >
            <button className="flex w-32  space-x-3 items-center">
              <RiLiveLine />
              <span>live site</span>
            </button>
          </a>
          <a
            href={`${links[1]?.client}`}
            target={`_blank`}
            className="btn btn-sm btn-outline btn-primary"
          >
            <button className="flex w-32 space-x-3 items-center">
              <CgBrowser />
              <span>Client Code</span>
            </button>
          </a>
          <a
            href={`${links[2]?.server}`}
            target={`_blank`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            <button className="flex w-32 items-center space-x-3 items-center">
              <FiServer />
              <span>Server Code</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
