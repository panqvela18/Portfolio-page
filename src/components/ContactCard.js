import React from "react";
import "./ContactCard.css";
import LineMaxWidth from "./header/LineMaxWidth";

export default function ContactCard({ photo, headline, subtext, style }) {
  return (
    <>
      <div className="contact-card-wrapper">
        <div className="props-image">{photo}</div>
        <h2 style={style}>{headline}</h2>
        <LineMaxWidth />
        <h3 style={{ margin: "5px 0" }}>{subtext}</h3>
      </div>
    </>
  );
}
