import React from "react";

const text = "Hamzinski";

const Logo = () => (
  <div className="stage w-full h-full flex items-center justify-center ">
    <div className="wrapper relative text-black dark:text-white text-4xl uppercase tracking-widest pt-2.5 pl-2 pr-1 pb-1">
      <div className="slash absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-24 scale-y-0 origin-center bg-black dark:bg-white w-0.5 h-[145%] z-10 animate-slash">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-[120%] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black dark:bg-white"></div>
      </div>
      <div className="sides absolute w-full h-full top-0 left-0 overflow-hidden">
        <div className="side absolute bg-black dark:bg-white w-full h-0.5 top-0 left-0 transform -translate-x-full animate-sideTop"></div>
        <div className="side absolute bg-black dark:bg-white w-0.5 h-full top-0 right-0 transform -translate-y-full animate-sideRight"></div>
        <div className="side absolute bg-black dark:bg-white w-full h-0.5 bottom-0 left-0 transform translate-x-full animate-sideBottom"></div>
        <div className="side absolute bg-black dark:bg-white w-0.5 h-full top-0 left-0 transform translate-y-full animate-sideLeft"></div>
      </div>
      <div className="text relative">
        <div className="text--backing opacity-0">{text}</div>
        <div className="text--left absolute top-0 left-0 w-1/2 h-full overflow-hidden">
          <div className="inner transform translate-x-full animate-textLeft">
            {text}
          </div>
        </div>
        <div className="text--right absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="inner transform -translate-x-full animate-textRight">
            {text}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Logo;
