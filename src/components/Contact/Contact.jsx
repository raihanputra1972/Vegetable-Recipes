import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_474h2u8", "template_1n35zrh", form.current, {
        publicKey: "D0Tr4rqiSyg_C5ZQk",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
