import React from "react";
import Navbar from "./UI/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Instructors from "./pages/Instructors";
import Loop from "./pages/Loop";
import Quiz from "./pages/Quiz";
import Assignment from "./pages/Assignment";

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Choose your Program first</h1>
            </div>
          }
        />
        <Route path="/home/:programCode" element={<Home />} />
        <Route path="/modules/:programCode" element={<Modules />} />
        <Route path="/instructors/:programCode" element={<Instructors />} />
        <Route path="/modules/:programCode/loop" element={<Loop />} />
        <Route path="/modules/:programCode/quiz" element={<Quiz />} />
        <Route
          path="/modules/:programCode/assignment"
          element={<Assignment />}
        />
      </Routes>
    </>
  );
};

export default App;
