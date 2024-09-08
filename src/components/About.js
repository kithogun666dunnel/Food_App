import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>ABOUT</h1>
        <h2>THIS IS DADDY</h2>
        <UserClass name={"1ST"} location={"P-UNE CLASS"} />
      </div>
    );
  }
}

export default About;
