"use client";
import { Button } from "@mui/material";
import Card from "./Card";
import React, { useState } from "react";

type Props = {};

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-2/3 h-4/5 rounded-3xl justify-center m-auto p-10  bg-opacity-10  text-white text-lg grid-2-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        className={`h-80 w-80 rounded-lg border-4 border-cyan-500 transition-opacity ${
          isHovered ? "bg-gray-800 opacity-75" : "bg-black opacity-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-white mb-2">
              Researcher
            </h1>
            <p className="text-lg text-gray-300 mb-4">December 23 - Jan 24</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, lorem sit amet condimentum ultricies, quam velit
              lobortis ligula, non dictum lorem erat vitae elit.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-3xl font-semibold text-white">Researcher</h1>
            <p className="text-lg text-gray-300 mb-2">December 23 - Jan 24</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
