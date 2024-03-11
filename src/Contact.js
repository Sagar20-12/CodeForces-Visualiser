import React from "react";
import CollapsibleExample from "./CollapsibleExample";
import "./contact.css";
export default function Contact() {
  return (
    <div>
      <CollapsibleExample/>
      <div id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a href="https://www.linkedin.com/in/thesagarsingh/">
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://github.com/Sagar20-12">
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a href="sagar.raghav2708@gmail.com">
                  <img
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <p>Thanks for using the website.</p>
            <p>
              Special Thanks to
              <a href="">
                <strong style={{color: "#112B3C"}}> Youtube, 6 pack programmer youtube channel, google and Stack overflow </strong>
              </a>
              for help, motivation and contribution.
            </p>
            Project By 
              <strong> Sagar Singh Raghav (Me)</strong>
         
          </div>
        </div>
      </div>
    </div>
  );
}
