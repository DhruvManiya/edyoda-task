import React from "react";
import { useLocation } from "react-router-dom";

const Modules = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/modules/DS031221" ? (
        <main></main>
      ) : (
        <main>
          <h1>Modules are not found for {location.pathname.split("/")[2]}</h1>
        </main>
      )}
    </>
  );
};

export default Modules;
