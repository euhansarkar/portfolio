import React from "react";

const Resume = () => {
  return (
    <div className="my-12 md:h-80">
      <h2 className="text-6xl font-bold w-3/5 capitalize mx-auto">
        got a good oppertunity for me? here is my resume
      </h2>
      <div className="flex items-center pt-20 justify-center">
        <a href="euhanresume.pdf" download={`euhanresume.pdf`}>
          <button className="btn btn-outline btn-error">download</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
