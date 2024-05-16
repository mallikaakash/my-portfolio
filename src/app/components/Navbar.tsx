import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

type Props = {};

const socials: { name: string; url: string; icon: any }[] = [
  { name: "GitHub", url: "https://github.com/mallikaakash", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aakash-mallik-82b99423b/",
    icon: Linkedin,
  },
  { name: "Twitter", url: "https://twitter.com/AakashMallik9", icon: Twitter },
  { name: "Email", url: "mailto: aakashmallik7777@gmai.com", icon: Mail },
];

const navbarItems = [
  { name: "Home", url: "#intro" },
  { name: "About Me", url: "#aboutMe" },
  { name: "Experience", url: "#experience" },
  { name: "Education", url: "#education" },
  { name: "Projects", url: "#projects" },
  { name: "Blogs", url: "#blogs" },
  { name: "Skills", url: "#skills" },
];

const Navbar = (props: Props) => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex flex-row  bg-black justify-between p-4 sticky z-50 top-0">
        <h1 className="text-white font-bold text-2xl underline underline-offset-8 decoration-cyan-500 -rotate-3">
          {" "}
          Aakash Mallik
        </h1>
        <ul className="flex">
          {navbarItems.map((item) => (
            <Link href={`${item.url}`}>
              <li className="text-white mx-8 text-xl fond-bold underline decoration-cyan-500">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="flex">
          {socials.map((social) => (
            <Link href={`${social.url}`}>
              <li className="mx-8 ">
                <social.icon fill="white" size={30} />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
