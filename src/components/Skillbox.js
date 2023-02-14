import React from "react";
import LineMaxWidth from "./header/LineMaxWidth";

export default function Skillbox({ name }) {
  return (
    <div className="skill-box">
      <span className="skill-title">{name}</span>
      <LineMaxWidth />
    </div>
  );
}
