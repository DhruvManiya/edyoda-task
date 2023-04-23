import React from "react";
import Navbar from "./UI/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Instructors from "./pages/Instructors";
// import Loop from "./pages/Loop";
// import Quiz from "./pages/Quiz";
// import Assignment from "./pages/Assignment";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/home/ECRD" />} />
        <Route path="/home/ECRD" element={<Home />} />
        <Route path="/home/:programCode" element={<Home />} />
        <Route path="/modules/:programCode" element={<Modules />} />
        <Route path="/instructors/:programCode" element={<Instructors />} />
        <Route path="/modules/:programCode/loop" element={<Modules />} />
        <Route path="/modules/:programCode/quiz" element={<Modules />} />
        <Route
          path="/modules/:programCode/assignment"
          element={<Modules />}
        />
      </Routes>
    </>
  );
};

export default App;
