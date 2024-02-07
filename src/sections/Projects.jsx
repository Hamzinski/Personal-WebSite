import React, { useEffect } from "react";
import laptop from "../assets/laptop.png";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projectsData = [
    {
      title: `${t("projects.title")}`,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      labels: ["react", "vercel", "axios", "router"],
      link: "https://github.com/Hamzinski",
      inLaptop: laptop1,
      color: "#DDEEFE",
      darkColor: "#2D3235",
    },
    {
      title: `${t("projects.title1")}`,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      labels: ["react", "redux", "axios", "router", "vercel"],
      link: "https://github.com/Hamzinski",
      inLaptop: laptop2,
      color: "#D9F6F1",
      darkColor: "#495351",
    },
  ];
  const links = [
    {
      text: "Github",
      href: "https://github.com/Hamzinski",
      color: "#1769FF",
      darkColor: "#1769FF",
    },
    {
      text: "Personal Blog",
      href: "blog-link",
      color: "#0A0A14",
      darkColor: "#FFFFFF",
    },
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/muhammed-hamza-toptanc%C4%B1-8440a7235/",
      color: "#0077B5",
      darkColor: "#0077B5",
    },
    {
      text: "Email",
      href: "email-link",
      color: "#AF0C48",
      darkColor: "#AF0C48",
    },
  ];

  const theme = localStorage.getItem("theme");
  useEffect(() => {
    console.log("fgdfgf");
  }, [theme]);

  return (
    <div className="py-20 flex flex-col mx-auto justify-center items-center dark:bg-[#484148]">
      <h1 className="font-inter text-5xl dark:text-[#FFFFFF] ">
        {" "}
        {t("projects.project")}
      </h1>
      <div className="mt-24 max-w-screen-lg flex flex-col md:flex-row justify-center items-center gap-12 md:gap-9 md:h-[700px] ">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`h-full relative rounded-xl w-[90%] md:w-1/2 p-14 dark:bg-[var(--project-bg-dark)] bg-[var(--project-bg-light)]`}
            style={{
              "--project-bg-light": project.color,
              "--project-bg-dark": project.darkColor,
            }}
          >
            <h1 className="font-playfair font-bold text-3xl dark:text-[#FFFFFF]">
              {project.title}
            </h1>
            <p className="font-inter mt-4 dark:text-[#FFFFFF]">
              {project.text}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.labels.map((label, ix) => (
                <div
                  key={ix}
                  className="font-playfair font-bold  bg-white dark:bg-[#525252] dark:text-[#FFFFFF] w-fit rounded-full p-1 px-4 "
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <a
                className="font-inter font-semibold  text-xl dark:text-[#FFFFFF]"
                href={project.link}
              >
                {t("projects.link")}
              </a>{" "}
              <a
                className="font-inter font-semibold  text-xl dark:text-[#FFFFFF]"
                href={project.link}
              >
                {t("projects.link1")}
              </a>
            </div>
            <div className="flex justify-center items-center mt-32 md:mt-0">
              <img
                className="mt-8 absolute md:max-h-none max-h-40  bottom-[-30px]"
                src={project.inLaptop}
                alt=""
              />
              <img
                className="mt-8 absolute w-[310px] md:w-auto bottom-[-40px]"
                src={laptop}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-0 md:mt-24 p-14 mx-auto max-w-screen-lg flex flex-col justify-center items-center  md:flex-row gap-0 md:gap-12 ">
        <div className="w-full">
          <h1 className="font-inter text-5xl py-20 text-center md:text-right dark:text-[#FFFFFF]">
            {t("projects.lets")}
          </h1>
        </div>

        <div className="w-1/3 font-inter text-2xl flex flex-col justify-center gap-1  ">
          {links.map((link, index) => (
            <a
              className={`w-fit dark:text-[var(--link-text-dark)] text-[var(--link-text-light)]`}
              key={index}
              href={link.href}
              style={{
                "--link-text-light": link.color,
                "--link-text-dark": link.darkColor,
              }}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
