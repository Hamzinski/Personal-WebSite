import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const isTurkish = i18n.language === "tr";
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [themeState, setThemeState] = useState();

  const changeTheme = () => {
    if (localStorage.theme == "dark") {
      setThemeState("light");
      localStorage.setItem("theme", "light");

      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.add("dark");
    }
    setThemeState(localStorage.theme);
  }, []);

  return (
    <div className="bg-[#F4F4F4] dark:bg-[#2A262B] p-12">
      <div className="flex justify-end mx-auto max-w-screen-lg ">
        <div className="flex items-center gap-4 font-inter">
          <button onClick={changeTheme}>sa</button>
          <p className="text-[#777777] dark:text-[#D9D9D9]">
            {themeState === "dark" ? t("mod1") : t("mod")}
          </p>
          <p className="h-4 border-solid w-fit border-r-2 border-black"></p>
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "tr" : "en")}
          >
            <p className="text-[#777777]">
              <span className={`${isEnglish ? "text-[#E92577]" : ""}`}>
                {t("switch1")}
              </span>
              <span className={`${isTurkish ? "text-[#E92577]" : ""}`}>
                {" "}
                {t("switch2")}
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
