import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "../styles/mainav.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MainNav = () => {
  const [dropDown, setDropDwon] = useState(false);
  const [desc, setDesc] = useState("");
  const location = useLocation();

  const description = () => {
    if (location.pathname.split("/")[2] === "ECRD") {
      setDesc("ECRD Program");
    }
    if (location.pathname.split("/")[2] === "FSR222222") {
      setDesc("FSR Program");
    }
    if (location.pathname.split("/")[2] === "DS261121") {
      setDesc("DS Program");
    }
    if (location.pathname.split("/")[2] === "DS031221") {
      setDesc("Data Scientist Program");
    }
  };

  useEffect(() => {
    description()
  },[location])

  console.log(desc)

  return (
    <>
      <nav className={`${classes.nav}`}>
        <section className={`${classes.static_nav}`}>
          {location.pathname === "/home" ? (
            <>
              <div className={`${classes.title_of_nav}`}>
                <div onClick={() => setDropDwon(!dropDown)}>
                  <span>Program Code</span>
                  <span>
                    {dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </span>
                </div>
                <span>Select your Program here</span>
              </div>
            </>
          ) : (
            <>
              <div className={`${classes.title_of_nav}`}>
                <div onClick={() => setDropDwon(!dropDown)}>
                  <span>{location.pathname.split("/")[2]}</span>
                  <span>
                    {dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </span>
                  <span>{desc}</span>
                </div>
              </div>
            </>
          )}
        </section>
        {dropDown && (
          <section className={`${classes.drop_down_section}`}>
            <p>select program</p>
            <ul className={`${classes.programs}`}>
              <Link
                to="/home/ECRD"
                className={`${
                  location.pathname.split("/")[2] === "ECRD"
                    ? classes.selected
                    : classes.link
                }`}
                onClick={() => {
                  setDropDwon(!dropDown);
                }}
              >
                <li>ECRD</li>
              </Link>
              <Link
                to="/home/FSR222222"
                className={`${
                  location.pathname.split("/")[2] === "FSR222222"
                    ? classes.selected
                    : classes.link
                }`}
                onClick={() => {
                  setDropDwon(!dropDown);
                }}
              >
                <li>FSR222222</li>
              </Link>
              <Link
                to="/home/DS261121"
                className={`${
                  location.pathname.split("/")[2] === "DS261121"
                    ? classes.selected
                    : classes.link
                }`}
                onClick={() => {
                  setDropDwon(!dropDown);
                }}
              >
                <li>DS261121</li>
              </Link>
              <Link
                to="/home/DS031221"
                className={`${
                  location.pathname.split("/")[2] === "DS031221"
                    ? classes.selected
                    : classes.link
                }`}
                onClick={() => {
                  setDropDwon(!dropDown);
                }}
              >
                <li>DS031221</li>
              </Link>
            </ul>
          </section>
        )}
      </nav>
    </>
  );
};

export default MainNav;
