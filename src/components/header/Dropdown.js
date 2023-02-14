import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import "./Dropdown.css";
import LineMaxWidth from "./LineMaxWidth";

export default function Dropdown({ showMenu, handlers, setShowMenu }) {
  return (
    <>
      <div>
        {showMenu ? (
          <nav>
            <ul>
              <LineMaxWidth />
              <li
                onClick={() => {
                  handlers[0]();
                  setShowMenu(false);
                }}
              >
                <CgProfile className="icon" /> <span>About Me</span>
              </li>
              <LineMaxWidth />
              <li
                onClick={() => {
                  handlers[1]();
                  setShowMenu(false);
                }}
              >
                <FaProjectDiagram className="icon" /> <span>Project</span>
              </li>
              <LineMaxWidth />
              <li
                onClick={() => {
                  handlers[2]();
                  setShowMenu(false);
                }}
              >
                <BsMegaphone className="icon" /> <span>Contact</span>
              </li>
              <LineMaxWidth />
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
