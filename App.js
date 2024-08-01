import React from "react";
import ReactDOM from "react-dom/client";

 const elem = <span>react elemtn</span>





const title = ( 
  <h1 className="head" tabIndex="5">
    {elem}
    Namastey react using JSX 
    <HeadingComponent/>
  </h1>
);

 // React FUNCTIONAL component
const HeadingComponent = () => (
  <div id="container">
 
    <h2>{console.log("hiii harsha")}</h2>
      <h1 className="heading">Namastey React funtional 👙component in react</h1>
  </div>
);


const number = 10000;




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);