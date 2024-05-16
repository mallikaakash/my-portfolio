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
        <p className="mt-4 flex text-3xl"> I like</p>
        <span className="text-3xl text-cyan-500 ml-2">
          <Typewriter
            options={{
              strings: ["Research", "Web Development", "Machine Learning"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

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
      {/* <Image
          src={"/../../../public/next.svg"}
          alt="Me"
          width={500}
          height={500}
          className="h-60 w-60 rounded-full ml-20 bg-gray-400"
        />
      </div> */}
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  );
};

export default Intro;
