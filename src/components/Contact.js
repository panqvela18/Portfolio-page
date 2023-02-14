import React, { forwardRef } from "react";
import ContactCard from "./ContactCard";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

export default forwardRef(function Contact({}, ref) {
  return (
    <div className="contact-wrapper" ref={ref} style={{ scrollMargin: "68px" }}>
      <div className="contact-title-wrapper">
        <h2 className="contact-title">Contact</h2>
      </div>
      <div className="fullscreen-card-container">
        <ContactCard
          photo={
            <HiDevicePhoneMobile
              style={{ height: "50px", width: "50px", color: "#fb2056" }}
            />
          }
          headline="+995 591 60 40 50"
          subtext="Monday - Friday from 10am - 8pm"
        />
        <ContactCard
          photo={
            <FiMail
              style={{ height: "50px", width: "50px", color: "#fb2056" }}
            />
          }
          headline="Irakli.pankvelashvili@gmail.com"
          subtext="Contact me every time!"
          style={{ fontSize: "18px" }}
        />
        <ContactCard
          photo={
            <BsBuilding
              style={{ height: "50px", width: "50px", color: "#fb2056" }}
            />
          }
          headline="Tbilisi"
          subtext="Georgia"
        />
      </div>
    </div>
  );
});
