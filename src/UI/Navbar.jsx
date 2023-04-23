import React from "react";
import MainNav from "../components/MainNav";
import SubNav from "../components/SubNav";

const Navbar = () => {
  return (
    <>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: '100' }}>
        <SubNav />
        <MainNav />
      </div>
    </>
  );
};

export default Navbar;
