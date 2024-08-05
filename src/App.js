import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗👙💕 by <strong>KITHOGUN</strong>
      </p>
    </footer>
  );
};



// APP LAYOUT Component
const AppLayout = () => { 
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

// RENDERING
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
