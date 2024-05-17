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
    const switchToggleElement = document.querySelector("#switch-toggle");
    if (localStorage.theme == "dark") {
      switchToggleElement.classList.remove("bg-yellow-500", "-translate-x-2");
      switchToggleElement.classList.add("bg-gray-700", "translate-x-full");
      setThemeState("light");
      localStorage.setItem("theme", "light");

      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("bg-[#2A262B]");
    } else {
      switchToggleElement.classList.add("bg-yellow-500", "-translate-x-2");
      switchToggleElement.classList.remove("bg-gray-700", "translate-x-full");
      localStorage.setItem("theme", "dark");
      setThemeState("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("bg-[#2A262B]");
    }
  };

  useEffect(() => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("bg-[#2A262B]");
    }
    setThemeState(localStorage.theme);
  }, []);

  return (
    <div className="bg-[#F4F4F4] dark:bg-[#2A262B] p-12">
      <div className="flex justify-center md:justify-end mx-auto max-w-screen-lg">
        <div className="flex items-center gap-6 font-inter">
          <button
            className="w-24 md:w-16 h-6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
            onClick={changeTheme}
          >
            <div
              id="switch-toggle"
              className={`w-8 h-8 relative rounded-full transition duration-500 transform -translate-x-2 p-1 text-white ${
                themeState == "dark"
                  ? "bg-gray-700 translate-x-8 md:translate-x-10 "
                  : "bg-yellow-500 -translate-x-2"
              }`}
            >
              {themeState == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </div>
          </button>
          <p className="text-[#777777] dark:text-[#D9D9D9]">
            {themeState === "dark" ? t("mod1") : t("mod")}
          </p>
          <p className="h-4 border-solid w-fit border-r-2 border-black dark:border-white"></p>
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
