import React from "react";

function Contact() {
  return (
    <div className="contacts" id="contact">
      <h2>Contact Ue</h2>
      <form
        action="https://formspree.io/f/mrgvdlrk"
        method="POST"
      >
        <div className="first">
          <div className="second">
            <div className="threeth">
              <input type="text" name="firstName" required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="second">
            <div className="threeth">
              <input type="text" name="lastName" required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="second">
            <div className="threeth">
              <input type="email" name="email" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="second">
            <div className="threeth-textarea">
              <textarea name="message" required></textarea>
              <span className="text">Type Your Message Here....</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="second second-link">
            <button type="submit" className="submit">
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;