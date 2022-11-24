import React from "react";
import STRINGS from "../../../constants/strings";

const Footer = () => {
  return (
    <>
      <div className="w-full h-6 bg-slate-800 flex flex-row justify-end items-center absolute bottom-0 left-0">
        <h1 className="text-l text-white font-medium mr-8">
          {STRINGS.APP_INFO.DATE}
        </h1>
      </div>
    </>
  );
};

export default Footer;
