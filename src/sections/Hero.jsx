import React from "react";
import hamz from "../assets/t.jpg";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <div className="mt-32 flex justify-center items-center md:pt-6 pb-12  dark:bg-[#2A262B]  bg-[#F4F4F4] ">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg   ">
        <div className="w-[100%] md:w-[55%] px-6 md:px-0">
          <div className="">
            <p className="font-inter font-light text-3xl dark:text-[#FFFFFF]">
              {t("hero.hi")} <br />
            </p>
            <p className="font-inter font-medium text-2xl mt-7 leading-[3rem] dark:text-[#FFFFFF]">
              {t("hero.intro")}
              {isEnglish && <br />} {t("hero.intro2")}
            </p>
          </div>
          <div className="flex gap-4 mt-12">
            <a
              href="https://www.linkedin.com/in/muhammed-hamza-toptanc%C4%B1-8440a7235/"
              target="_blank"
            >
              <div
                className="bg-[url('assets/LinkedIn.png')] dark:bg-[url('assets/LinkedIn1.png')]  bg-no-repeat  w-8 h-8"
                alt=""
              />
            </a>
            <a href="https://github.com/Hamzinski" target="_blank">
              <div
                className="bg-[url('assets/github.png')] dark:bg-[url('assets/github1.png')]  bg-no-repeat  w-10 h-10"
                alt=""
              />
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

        <div className="photo_box ml-5 md:ml-1 w-80 mb-4 mt-12 md:mt-0">
          <img className="w-[100%]  rounded-3xl" src={hamz} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
