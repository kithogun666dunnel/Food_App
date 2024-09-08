import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us! We’d love to hear from you.</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
