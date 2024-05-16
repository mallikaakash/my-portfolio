import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="w-2/3 h-4/5 border-cyan-500 border-4 rounded-3xl m-auto p-40  bg-opacity-10  text-white text-lg ">
      <h1 className="text-5xl text-bold  underline decoration-cyan-500 mb-4">
        Who am I
      </h1>
      <p> Hi</p>
    </div>
  );
};

export default AboutMe;
