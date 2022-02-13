import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactsection">
        <h1>Contact Us</h1>
        <input className="emailbox" type="email" placeholder="Enter Your Email" />
        <input className="Subjectbox" type="text" placeholder="Enter Subject" />
        <textarea className="messagebox" type="text" placeholder="Enter Your Message" rows={8} cols={100}/>
        <button className="submit">Send</button>
        <p>Contact page currently not working please try again later!</p>
      </div>
    </div>
  );
};

export default Contact;
