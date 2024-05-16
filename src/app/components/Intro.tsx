"use client";
import { Paperclip } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import pic from "../../../public/pic.jpeg";

import Typewriter from "typewriter-effect";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-2/3 h-4/5 flex border-cyan-500 border-4 rounded-3xl m-auto p-20 px-40 justify-between bg-opacity-10  text-white text-lg ">
      <div>
        <h1 className="text-5xl ">
          Hello !!! <br></br> I am{" "}
          <span className="underline decoration-cyan-500 ">Aakash Mallik</span>
          ...
        </h1>
        <p className="mt-4 flex text-3xl">
          {" "}
          I like
          <span className="text-3xl text-cyan-500 ml-2">
            <Typewriter
              options={{
                strings: ["Research", "Web Development", "Machine Learning"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>

        <p className="text-white text-2xl mt-11 flex  ">
          {" "}
          Take a look at my resume here{" "}
          <span className="ml-5 flex my-auto">
            <Link href="https://drive.google.com/file/d/1eyWdNzbaYO_tE1cYKTPvR-XqKFNaLkwM/view?usp=sharing">
              <Paperclip />
            </Link>
          </span>{" "}
        </p>
      </div>
      <div>
        <Image
          src={"/../../../public/pic.jpeg"}
          alt="Me"
          width={500}
          height={500}
          className="h-60 w-60 rounded-full ml-20 bg-gray-400"
        />
      </div>
    </div>
  );
};

export default Intro;
