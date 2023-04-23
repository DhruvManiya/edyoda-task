import React from "react";
import classes from "../styles/qize.module.css";
import Card from "../UI/Card";
const Assignment = () => {
  return (
    <main className={`${classes.main}`}>
      <section>
        <h1>Assignment 1: Opretor | Loops</h1>
        <span>20 December 2021 </span>
      </section>
      <section>
        <h1>Assignment Details</h1>
        <div>
          <Card>
            <div className={`${classes.container}`}>
              <div className={`${classes.overall_container}`}>
                <div>
                  <p>3</p>
                  <span>Problems</span>
                </div>
                <div>
                  <p>100</p>
                  <span>Total Score</span>
                </div>
              </div>
              <div className={`${classes.times_container}`}>
                <div className={`${classes.times}`}>
                  <span>Start:</span>
                  <div>
                    <img src="/calendar.svg" alt="" />
                    <span>20 Dec 2021</span>
                  </div>
                  <div>
                    <img src="/clock-blue.svg" alt="" />
                    <span>7:30 PM</span>
                  </div>
                </div>
                <div className={`${classes.times}`}>
                  <span>Due:</span>
                  <div>
                    <img src="/calendar.svg" alt="" />
                    <span>26 Dec 2021</span>
                  </div>
                  <div>
                    <img src="/clock-blue.svg" alt="" />
                    <span>11:59 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Assignment;
