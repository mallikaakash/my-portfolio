import Image from "next/image";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <div id="intro" className=" min-h-screen relative flex bg-black">
        <Intro />
      </div>

      <div id="aboutMe" className=" min-h-screen relative flex bg-black">
        <AboutMe />
      </div>
      <div id="experience" className=" min-h-screen relative flex bg-black">
        <Experience />
      </div>

      <div id="education" className=" min-h-screen relative flex bg-black">
        {/* <Education /> */}
      </div>

      <div id="projects" className=" min-h-screen relative flex bg-black">
        <Projects />
      </div>

      <div id="blogs" className=" min-h-screen relative flex bg-black">
        <Blog />
      </div>

      <div id="skills" className=" min-h-screen relative flex bg-black">
        <Skills />
      </div>
    </div>
  );
}
