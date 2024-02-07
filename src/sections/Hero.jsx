import React from "react";
import hamz from "../assets/t.jpg";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/github.png";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <div className="flex justify-center items-center py-12  dark:bg-[#2A262B]  bg-[#F4F4F4]">
      <div className="flex justify-between items-center max-w-screen-lg ">
        <div className="w-[55%]">
          <div className="">
            <p className="font-inter font-light text-3xl dark:text-[#FFFFFF]">
              {t("hero.hi")} <br />
            </p>
            <p className="font-inter font-medium text-4xl mt-7 leading-[3.5rem] dark:text-[#FFFFFF]">
              {t("hero.intro")}
              {isEnglish && <br />} {t("hero.intro2")}
            </p>
          </div>
          <div className="flex gap-4 mt-12">
            <a href="">
              <img src={linkedin} alt="" />
            </a>
            <a href="">
              <img src={github} alt="" />
            </a>
          </div>
          <div className="mt-6">
            <p className="font-inter font-normal dark:text-[#FFFFFF]">
              {t("hero.alt1")}{" "}
              <span className="text-[#AF0C48] "> {t("hero.alt2")}</span>{" "}
              {t("hero.alt3")}
              <span className="text-[#AF0C48] "> {t("hero.alt4")} </span>
              {t("hero.alt5")}
              <br /> {t("hero.alt6")}{" "}
              <span className="text-[#AF0C48] underline ">
                {t("hero.alt7")}
              </span>
            </p>
          </div>
        </div>

        <div className=" w-80 mb-4 shadow-[-20px_-20px_1px_rgba(233,_37,_119,_1),_0_0px_0px_rgba(233,_37,_119,_1)] rounded-3xl">
          <img className="w-[100%] rounded-3xl" src={hamz} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
