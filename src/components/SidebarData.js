import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "ABOUT ME",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "PROJECTS",
    path: "/projects",
    // icon: <IoIcons.IoMdPaper />,
    cName: "nav-text",
  },
  {
    title: "RESUME",
    path: "/resume",
    // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "CONTACTS",
    path: "/contacts",
    // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  }
];
