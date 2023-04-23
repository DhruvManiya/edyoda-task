import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "../styles/mainav.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const programs = [
  { link: "/home/ECRD", name: "ECRD", description: "ECRD Program" },
  { link: "/home/FSR222222", name: "FSR222222", description: "FSR Program" },
  { link: "/home/DS261121", name: "DS261121", description: "DS Program" },
  {
    link: "/home/DS031221",
    name: "DS031221",
    description: "Data Scientist Program",
  },
];

const MainNav = () => {
  const [dropDown, setDropDwon] = useState(false);
  const [desc, setDesc] = useState({ link: "", name: "", description: "" });
  const location = useLocation();

  useEffect(() => {
    setDesc(
      programs.find((program) => {
        return program.name === location.pathname.split("/")[2];
      })
    );
  }, []);

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
                </div>
                <span>{desc.description}</span>
              </div>
            </>
          )}
        </section>
        {dropDown && (
          <section className={`${classes.drop_down_section}`}>
            <p>select program</p>
            <ul className={`${classes.programs}`}>
              {programs &&
                programs.map((program) => (
                  <Link
                    to={program.link}
                    className={`${
                      location.pathname.split("/")[2] === program.name
                        ? classes.selected
                        : classes.link
                    }`}
                    onClick={() => setDropDwon(!dropDown)}
                  >
                    <li>{program.name}</li>
                  </Link>
                ))}
            </ul>
          </section>
        )}
      </nav>
    </>
  );
};

export default MainNav;
