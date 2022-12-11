import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProject from "./SingleProject/SingleProject";

// const projectsData = [
//   {
//     _id: 1,
//     name: 'EduLayer',
//     description: 'Proactively promote economically sound core competencies via leading-edge initiatives. Completely repurpose optimal imperatives vis-a-vis high-payoff markets. Credibly supply an expanded array of partnerships without covalent e-tailers. Competently visualize highly efficient imperatives before maintainable convergence. Completely implement B2C catalysts for change after cooperative resources.Progressively conceptualize cost effective process improvements whereas exceptional models. .',
//     images: [img11],
//     links: [
//       {
//         live: 'https://edu-layer.web.app/',
//       },
//       {
//         clint: 'https://github.com/euhansarkar/Edu-Layer-Client',
//       },
//       {
//         server: 'https://github.com/euhansarkar/Edu-Layer-Server',
//       },
//     ],
//   },
//   {
//     _id: 2,
//     name: 'PhotoShootCare',
//     description: 'Proactively promote economically sound core competencies via leading-edge initiatives. Completely repurpose optimal imperatives vis-a-vis high-payoff markets. Credibly supply an expanded array of partnerships without covalent e-tailers. Competently visualize highly efficient imperatives before maintainable convergence. Completely implement B2C catalysts for change after cooperative resources.Progressively conceptualize cost effective process improvements whereas exceptional models. .',
//     images: [img21],
//     links: [
//       {
//         live: 'https://photoshootcare.web.app/',
//       },
//       {
//         clint: 'https://github.com/euhansarkar/PhotoShootCare-Client',
//       },
//       {
//         server: 'https://github.com/euhansarkar/PhotoShootCare-Server',
//       },
//     ],
//   },
// ];

const Projects = () => {
  const projectsData = useLoaderData();
  return (
    <div className="my-20 mx-16">
      <h2 className="fond-bold text-5xl capitalize">my projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 items-center mx-2 ">
        {projectsData.map((project) => (
          <SingleProject key={project?._id} project={project}></SingleProject>
        ))}
      </div>
    </div>
  );
};

export default Projects;
