import React from "react";
import "./Photowithtext.css";
import LineMaxWidth from "./header/LineMaxWidth";

export default function Photowithtext({ style, image, headline, subtext }) {
  return (
    <>
      <div
        className="test-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="topPhotoText">
          <h1>{headline}</h1>
          <div style={{ padding: "0 20%" }}>
            <LineMaxWidth />
          </div>
          <h2>{subtext}</h2>
        </div>
      </div>
      <div className="topPhotoDiv">
        <img className="topPhoto" style={style} src={image} alt="programmer" />
        <div className="topPhotoText">
          <h1>{headline}</h1>
          <div style={{ padding: "0 20%" }}>
            <LineMaxWidth />
          </div>
          <h2>{subtext}</h2>
        </div>
      </div>
    </>
  );
}
