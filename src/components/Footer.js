import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-icon-wrapper">
        <a
          href="https://github.com/panqvela18"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          {" "}
          <BsGithub className="footer-icon" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/irakli-pankvelashvili/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsLinkedin className="footer-icon" />
        </a>
        <a
          href="https://www.instagram.com/ipanqvela/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsInstagram className="footer-icon" />
        </a>
        <a
          href="https://www.facebook.com/Panqvela/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <BsFacebook className="footer-icon" />
        </a>
      </div>
      <p className="footer-rights">All rights reserved © 2023</p>
    </footer>
  );
}
