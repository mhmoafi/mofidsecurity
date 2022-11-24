import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import style from "./layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
