import React from "react";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-center">Contact Us</h1>
      <div className="text-center ">
        <label>Name:</label>{" "}
        <input className="m-2" type="text" placeholder="Enter your name" />
        <br />
        <label>Email:</label>
        <input className="m-2" type="text" placeholder="Enter your email" />
        <br />
        <label>Message:</label>{" "}
        <input
          className=" m-2 p-5"
          type="text"
          placeholder="Enter your message"
        />
        <br />{" "}
        <button type="button" className="btn btn-success m-3">
          Send Message
        </button>{" "}
      </div>
    </>
  );
};

export default ContactUs;
