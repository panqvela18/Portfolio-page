import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Header.css";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Dropdown from "./Dropdown";
import { BiRocket } from "react-icons/bi";

export default function Header({ handlers }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowMenu(false);
      }}
    >
      <header className="header">
        <div className="header-container">
          <BiRocket
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
            className="logo"
          />
          <div
            className="toggle"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            {!showMenu ? (
              <RxHamburgerMenu className="burger-icon" />
            ) : (
              <IoClose className="burger-icon" />
            )}
          </div>
          <ul className="navigation-ul">
            <li onClick={handlers[0]}>About me</li>
            <li onClick={handlers[2]}>Contact</li>
            <li onClick={handlers[1]}>Projects</li>
          </ul>
        </div>
        <Dropdown
          handlers={handlers}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </header>
    </ClickAwayListener>
  );
}
