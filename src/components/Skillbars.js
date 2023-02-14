import React from "react";
import "./Skillbars.css";
import Skillbox from "./Skillbox";

export default function Skillbars() {
  return (
    <section className="skillbar-background  hidden-right">
      <div className="skillbar-container">
        <h2 className="skills-title">My Skills</h2>
        <Skillbox name="HTML" />
        <Skillbox name="CSS" />
        <Skillbox name="Bootstrap" />
        <Skillbox name="Tailwind" />
        <Skillbox name="Javascript" />
        <Skillbox name="React" />
        <Skillbox name="Angular" />
      </div>
    </section>
  );
}
