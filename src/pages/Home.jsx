import React from "react";
import classes from "../styles/home.module.css";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import ProgressCard from "../UI/ProgressCard";

const Home = () => {
  return (
    <>
      <main className={`${classes.home_main}`}>
        <section>
          <h1>Upcoming Certifications</h1>
          <div className={`${classes.certi_container}`}>
            <Card>
              <div className={`${classes.certi_details_container}`}>
                <img src="/Data-Analysis.png" alt="" />
                <div>
                  <div>
                    <span>CERTIFICATION</span>
                    <span>|</span>
                    <span>ATEMPT 1</span>
                  </div>
                  <h3>DATA ANALYSIS</h3>
                  <h3>CERTIFICATION</h3>
                  <div className={`${classes.complition_status}`}>
                    COMPLETD | 21 MAR 2022{" "}
                  </div>
                </div>
                <div className={`${classes.exam_structure}`}>
                  <h3>EXAM STRUCTURE</h3>
                  <div>
                    Round 1 <span>MCQs</span>
                    <span>CODING</span>
                  </div>
                  <div>
                    Round 2 <span>PROJECT</span>
                  </div>
                </div>
                <button className={`${classes.exam_button}`}>
                  VIEW EXAM DETAILS
                </button>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <h1>Continue Learning</h1>
          <div className={`${classes.learning_container}`}>
            <div className={`${classes.modules}`}>
              <Link to={"/modules/DS031221"}>
                <h4>VIEW MODULE DETAILS</h4>
              </Link>
              <Card>
                <div className={`${classes.learning}`}>
                  <div className={`${classes.learning_header}`}>
                    <div className={`${classes.learning_program}`}>
                      <img src="/DataWrangling.png" alt="" />
                      <div>
                        <h3>DATA Wrangling &</h3>
                        <h3>Visulization</h3>
                        <div
                          className={`${classes.learning_program_instuctor}`}
                        >
                          <img
                            src="/p7.jpg"
                            alt=""
                            className={`${classes.instructor}`}
                          />
                          <span>Test Instructor</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${classes.learning_status}`}>
                      <div>
                        <span>Live Sessions</span>
                        <div>
                          <p>0/13</p>
                          <p
                            className={`${classes.learning_status_progress_bar}`}
                          ></p>
                        </div>
                      </div>
                      <div>
                        <span>Assignments</span>
                        <div>
                          <p>0/3</p>
                          <p
                            className={`${classes.learning_status_progress_bar}`}
                          ></p>
                        </div>
                      </div>
                      <div>
                        <span>MCQ Quiz</span>
                        <div>
                          <p>0/6</p>
                          <p
                            className={`${classes.learning_status_progress_bar}`}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${classes.currentday_plans}`}>
                    <div>
                      <h3>Today's Plan</h3>
                      <span>21 March 2022</span>
                    </div>
                    <h3>Data Transformation using Pandas - 3</h3>
                    <div className={`${classes.currentday_open_time}`}>
                      <span>Daily Feedback</span>
                      <i>Opens at 7:30 PM</i>
                    </div>
                    <div className={`${classes.currentday_session_button}`}>
                      <button>JOIN LIVE SESSION</button>
                      <p>BEGINS AT 7:30 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className={`${classes.progress}`}>
              <Card>
                <div>
                  <h3>Progress Overview</h3>
                  <ProgressCard>
                    <div className={`${classes.grade}`}>
                      <span>0%</span>
                      <span>Overall grade</span>
                    </div>
                  </ProgressCard>
                  <ProgressCard>
                    <div className={`${classes.grade}`}>
                      <span>0%</span>
                      <span>Overall Attendance</span>
                    </div>
                  </ProgressCard>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
