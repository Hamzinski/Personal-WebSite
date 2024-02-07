import React from "react";
import { useTranslation } from "react-i18next";
function Profile() {
  const { t } = useTranslation();
  const profileData = [
    { label: `${t("profiles.birdth")}`, value: `${t("profiles.birdth1")}` },
    { label: `${t("profiles.city")}`, value: `${t("profiles.city1")}` },
    { label: `${t("profiles.edu")}`, value: `${t("profiles.edu1")}` },
    { label: `${t("profiles.role")}`, value: `${t("profiles.role1")}` },
  ];
  return (
    <div className="py-20 flex flex-col justify-center items-center bg-[#F4F4F4] dark:bg-[#2A262B] ">
      {" "}
      <h1 className="font-inter text-5xl dark:text-[#FFFFFF] ">
        {t("profiles.profile")}
      </h1>
      <div className="mt-24 max-w-screen-lg mx-auto flex justify-center items-center  ">
        <div className="flex justify-center items-center gap-8 w-full">
          <div className="p-8 bg-white dark:bg-[#525252] rounded-xl   flex flex-col gap-3 w-1/2 dark:shadow-[10px_10px_1px_rgba(52,_52,_52,_1),_0_0px_0px_rgba(52,_52,_52,_1)]  shadow-[10px_10px_1px_rgba(82,_82,_82,_1),_0_0px_0px_rgba(82,_82,_82,_1)]">
            <h2 className="font-playfair text-[#EA2678] text-2xl">
              {t("profiles.alt1")}
            </h2>

            <div className="flex flex-col gap-3 mt-4 ">
              {profileData.map((data) => (
                <div key={data.label} className=" flex gap-8 justify-start">
                  <h3 className="w-1/2 font-inter font-bold dark:text-[#FFFFFF]">
                    {data.label}
                  </h3>
                  <p className="w-1/2 font-inter dark:text-[#FFFFFF]">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2 ">
            <h3 className="font-playfair text-2xl dark:text-[#FFFFFF] ">
              {t("profiles.alt2")}
            </h3>
            <p className="font-inter text-lg dark:text-[#FFFFFF]">
              {t("profiles.about")}{" "}
              <p className="mt-8 text-lg dark:text-[#FFFFFF]">
                {t("profiles.about1")}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
