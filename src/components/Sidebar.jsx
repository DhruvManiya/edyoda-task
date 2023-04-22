import React from "react";
import classes from "../styles/sidebar.module.css";
import CottageIcon from "@mui/icons-material/Cottage";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={`${classes.sidebar}`}>
      <ul className={`${classes.list}`}>
        <Link to={`/home/${location.pathname.split("/")[2]}`}>
          <li
            className={`${classes.pages_button} ${
              location.pathname.split("/")[1] === "home" &&
              classes.active_page_button
            }`}
          >
            <CottageIcon fontSize="large" />
            <span>HOME</span>
          </li>
        </Link>
        <Link to={`/modules/${location.pathname.split("/")[2]}`}>
          <li
            className={`${classes.pages_button} ${
              location.pathname.split("/")[1] === "modules" &&
              classes.active_page_button
            }`}
          >
            {" "}
            <MenuBookIcon fontSize="large" />
            <span>MODULES</span>
          </li>
        </Link>
        <Link to={`/instructors/${location.pathname.split("/")[2]}`}>
          <li
            className={`${classes.pages_button} ${
              location.pathname.split("/")[1] === "instructors" &&
              classes.active_page_button
            }`}
          >
            {" "}
            <RecordVoiceOverIcon fontSize="large" />
            <span>INSTRUCTORS</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
