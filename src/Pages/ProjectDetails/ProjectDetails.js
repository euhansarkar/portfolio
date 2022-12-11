import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Animation from "./Animation/Animation";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

const ProjectDetails = () => {
  const data = useLoaderData();
  const {_id, name, description, images, links} = data;
  return (
    <div className="w-full md:w-10/12 mx-auto">
      <Animation images={images}></Animation>
      <ProjectInfo data={data}></ProjectInfo>    
    </div>
  );
};

export default ProjectDetails;
