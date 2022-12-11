import { data } from "autoprefixer";
import React from "react";

const ProjectInfo = ({ data }) => {
  const { features, startDate, endDate, name, description, links } = data;
  console.log(data);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" w-full md:w-4/12 -top[-0px]">
          <h1 className="text-4xl font-bold">Project Details</h1>
          <h2 className="py-3 font-bold">Project Started: {startDate}</h2>
          
          <h2 className="py-3 font-bold">Project Ended: {endDate}</h2>
          <p>{description}</p>
        </div>
        <div className="w-full md:w-8/12">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <div>
            <h1 className="text-5xl font-bold">Features</h1>
            {features.map((feature, index) => (
              <p>
                {index + 1}. {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
