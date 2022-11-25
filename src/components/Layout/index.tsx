import React from "react";
import Header from "./Header";
import style from "./layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full h-screen relative">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
