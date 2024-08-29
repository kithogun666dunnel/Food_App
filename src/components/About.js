import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Perform any necessary setup here
  }

  render() {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-100 min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">ABOUT</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          THIS IS DADDY
        </h2>
        <UserClass name={"1ST"} location={"p-UNE CLASS"} />
      </div>
    );
  }
}

export default About;
