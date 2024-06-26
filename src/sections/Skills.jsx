import React from "react";
import js from "../assets/js.jpg";
import spring from "../assets/spring.png";
import riakt from "../assets/react.png";
import vscode from "../assets/vscode.png";
import ridaks from "../assets/xd.png";
import java from "../assets/JAVAPNG1.png";
import { useTranslation } from "react-i18next";
function Skills() {
  const { t } = useTranslation();

  const icons = [
    { img: js, alt: "JAVASCRIPT" },
    { img: riakt, alt: "REACT" },
    { img: ridaks, alt: "REDUX" },
    { img: java, alt: "JAVA" },
    { img: spring, alt: "SPRING BOOT" },
    { img: vscode, alt: "VS CODE" },
  ];
  return (
    <div className="dark:bg-[#484148]">
      <div className=" py-20  flex flex-col items-center mx-auto max-w-screen-lg px-24">
        <h1 className="font-inter text-5xl dark:text-[#F4F4F4]">
          {t("skills.skill")}
        </h1>
        <div className="flex flex-wrap justify-center  md:flex-nowrap gap-9 mt-12 ">
          {icons.map((icon, index) => (
            <div key={index} className="w-32">
              <img
                className="h-32 rounded-md object-cover"
                src={icon.img}
                alt={icon.alt}
              />
              <p className="font-inter text-center text-[#777777] dark:text-[#D9D9D9]">
                {icon.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
