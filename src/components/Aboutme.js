import React, { forwardRef } from "react";
import "./Aboutme.css";
import LineMaxWidth from "./header/LineMaxWidth";
import Typical from "react-typical";

export default forwardRef(function Aboutme({}, ref) {
  return (
    <div
      className="title  hidden-left"
      ref={ref}
      style={{ scrollMargin: "68px" }}
    >
      <p className="hello">
        Hello, I am <span>Irakli Pankvelashvili</span> junior
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[" react", 1000, " javascript", 1000, " web", 1000]}
        />
        developer from <span>Tbilisi, Georgia</span>
      </p>
      <LineMaxWidth />

      <p className="text-content">
        I am a self-taught front-end developer with a passion for creating
        beautiful and intuitive web experiences. I have always been fascinated
        with the power of technology and its ability to bring people together.
        This drive for innovation and creativity led me to pursue a career in
        web development. Throughout my journey, I have been constantly learning
        and improving my skills, never settling for mediocrity. My foundation in
        HTML, CSS, and JavaScript allows me to bring ideas to life and make
        websites come alive. I am particularly skilled in creating responsive
        designs that work seamlessly across different devices and screen sizes.
        I am also proficient in using frameworks such as React and Angular,
        which enables me to create dynamic and interactive web applications. I
        am a quick learner and can pick up new technologies and programming
        languages with ease. I am always eager to stay up-to-date with the
        latest advancements in web development and take pride in delivering
        exceptional results for each project I work on. In my free time, I enjoy
        taking on freelance projects and participating in coding competitions to
        test my abilities and grow as a developer. I believe that continuous
        learning is key to success in this field, and I am dedicated to
        improving my skills and expanding my knowledge every day. With my
        passion for technology and my drive to succeed, I am confident in my
        ability to make a significant impact in the world of front-end
        development.
      </p>
    </div>
  );
});
