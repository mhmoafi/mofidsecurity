import React, { useContext } from "react";
import STRINGS from "../../../constants/strings";

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-800 flex flex-row justify-between items-center">
      <h1 className="text-2xl text-white font-black ml-12">
        {STRINGS.APP_INFO.TITLE}
      </h1>
      <div className="flex flex-col h-full justify-center items-end">
        <h1 className="text-xs text-white mr-12">
          {STRINGS.APP_INFO.DEVELOPER}
        </h1>
        <h1 className="text-xs text-white mr-12">{STRINGS.APP_INFO.EMAIL}</h1>
      </div>
    </div>
  );
};

export default Header;
