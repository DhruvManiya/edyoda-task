import React from "react";
import classes from "../styles/loop.module.css";

const Loop = () => {
  return (
    <main className={`${classes.main}`}>
      <section>
        <h2>Python Loops</h2>
        <p>15 December 2021, Wednesday, 7:30 PM</p>
      </section>
      <section>
        <span>DAILY FEEDBACK</span>
      </section>
      <section>
        <ul className={`${classes.list}`}>
          <li>
            <img src="/information-circle-1.svg" alt="" />
            <p> SESSION PLAN</p>
          </li>
          <li>
            <img src="/topic.svg" alt="" />
            <p>PRE-WATCH VIDEOS</p>
          </li>
          <li>
            <img src="/videocam.svg" alt="" />
            <p>SESSION RECORDING</p>
          </li>
          <li>
            <img src="/document.svg" alt="" />
            <p>REFERENCE</p>
          </li>
        </ul>
        <div className={`${classes.seesion_plan}`}>
          <div className={`${classes.seesion_plan_header}`}>
            <h2>Session Plan</h2>
            <p>LIVE session in about to start Please stayed tune</p>
            <button>JOIN LIVE SESSION</button>
          </div>
          <div className={`${classes.seesion_plan_sub_topics}`}>
            <h4>Sub Topics</h4>
            <p>1. Sorting and indexing Dataframe</p>
            <p>2. Filtering Dataframe</p>
            <p>3. Usage of loc and iloc functions</p>
          </div>
          <p>Session details</p>
        </div>
      </section>
    </main>
  );
};

export default Loop;
