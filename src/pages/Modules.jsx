import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "../styles/modules.module.css";
import Loop from "./Loop";
import Quiz from "./Quiz";
import Assignment from "./Assignment";

const Modules = () => {
  const location = useLocation();

  return (
    <>
      <main className={`${classes.main}`}>
        {location.pathname.split("/")[2] === "DS031221" ? (
          <div>
            <section className={`${classes.list_container}`}>
              <ul>
                <Link to="/modules/DS031221/loop">
                  <li
                    className={`${classes.list_modules} ${
                      location.pathname.split("/")[3] === "loop" &&
                      classes.active_list_modules
                    }`}
                  >
                    <img src={`${location.pathname.split("/")[3] === "loop" ? '/activeTopic.svg' : '/topic.svg'}`} alt="" />
                    <span>Python Loops</span>
                  </li>
                </Link>
                <Link to="/modules/DS031221/quiz">
                  <li
                    className={`${classes.list_modules} ${
                      location.pathname.split("/")[3] === "quiz" &&
                      classes.active_list_modules
                    }`}
                  >
                    <img src={`${location.pathname.split("/")[3] === "quiz" ? '/activeModuleQuiz.svg' : '/moduleQuiz.svg'}`} alt="" />
                    <span>Quiz-1: Data Types</span>
                  </li>
                </Link>
                <Link to="/modules/DS031221/assignment">
                  <li
                    className={`${classes.list_modules} ${
                      location.pathname.split("/")[3] === "assignment" &&
                      classes.active_list_modules
                    }`}
                  >
                    <img src={`${location.pathname.split("/")[3] === "assignment" ? '/activeAssignment.svg' : '/assignment.svg'}`} alt="" />
                    <span>Assignment 1: Opretor and Loops</span>
                  </li>
                </Link>
              </ul>
            </section>
            <section className={`${classes.content_container}`}>
              {(location.pathname === "/modules/DS031221/loop" && <Loop />) ||
                (location.pathname === "/modules/DS031221/quiz" && <Quiz />) ||
                (location.pathname === "/modules/DS031221/assignment" && (
                  <Assignment />
                ))}
            </section>
          </div>
        ) : (
          <section className={`${classes.notfound_modules}`}>
            <h1>Modules are not found for {location.pathname.split("/")[2]}</h1>
          </section>
        )}
      </main>
    </>
  );
};

export default Modules;
