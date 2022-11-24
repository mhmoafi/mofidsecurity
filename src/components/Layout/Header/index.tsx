import React, { useContext } from "react";
import STRINGS from "../../../constants/strings";

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-800 flex flex-row justify-start items-center">
      <h1 className="text-2xl text-white font-black ml-12">
        {STRINGS.APP_INFO.TITLE}
      </h1>
    </div>
  );
};

export default Header;
