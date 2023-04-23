import React from "react";
import classes from "../styles/qize.module.css";
import Card from "../UI/Card";

const Quiz = () => {
  return (
    <main className={`${classes.main}`}>
      <section>
        <h1>Quize 1: Data Types</h1>
        <span>16 December 2021 , Tuesday</span>
      </section>
      <section>
        <h1>Quiz Details</h1>
        <div>
          <Card>
            <div className={`${classes.container}`}>
              <div className={`${classes.overall_container}`}>
                <div>
                  <p>10</p>
                  <span>Question</span>
                </div>
                <div>
                  <p>-</p>
                  <span>Duration</span>
                </div>
                <div>
                  <p>125</p>
                  <span>Total Score</span>
                </div>
              </div>
              <div className={`${classes.times_container}`}>
                <div className={`${classes.times}`}>
                  <span>Start:</span>
                  <div>
                    <img src="/calendar.svg" alt="" />
                    <span>16 Dec 2021</span>
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
                    <span>19 Dec 2021</span>
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

export default Quiz;
