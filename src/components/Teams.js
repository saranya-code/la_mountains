import React, { useState } from "react";
import teamTitle from "../images/teamTitle.png";
import Mountain1 from "./Mountain1";
import Mountain2 from "./Mountain2";

function Teams(props) {
  const [currentPath, setCurrentPath] = useState(props.match.path);

  console.log(props.match.path);
  return (
    <>
      <div className="main-container">
        <div className="content-center mb-4 mt-4">
          <div>
            <img src={teamTitle} alt="teamTitle" />
          </div>
          <div className="pl-5 pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav content-center">
              <li
                className={`nav-item ${
                  currentPath === "/teams/Mountain1" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="/teams/Mountain1">
                  MOUNTAIN 1 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentPath === "/teams/Mountain2" ? "active" : ""
                }`}
              >
                <a className="nav-link" href="/teams/Mountain2">
                  MOUNTAIN 2
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {currentPath === "/teams/Mountain1" && <Mountain1 />}
        {currentPath === "/teams/Mountain2" && <Mountain2 />}
      </div>
    </>
  );
}
export default Teams;
