import React from "react";
import "./HomePage.css";
import Logo from "../../components/Logo/Logo";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionTwo from "../../components/SectionTwo/SectionTwo";

export default function HomePage() {
  return (
    <body>
      <div className="container">
        <Logo />
        <SectionOne />
        <SectionTwo />
      </div>
      <div className="sec-3"></div>
    </body>
  );
}
