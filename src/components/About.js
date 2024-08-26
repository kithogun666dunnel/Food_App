import React from 'react';
import  User from "./User";
import UserClass from './UserClass';
import { Component } from 'react';
 
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("PARENT-- Component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>ABOUT</h1>
        <h2>THIS IS NAMSTEY REACT WEBSHOW</h2>
        <UserClass name={"1ST"} location={"p-UNE CLASS"} />
        <UserClass name={"2ND"} location={"p-UNE CLASS"} />
      </div>
    );
  }
}


export default About;

















