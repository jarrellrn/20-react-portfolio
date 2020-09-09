import React from "react";
// import "../style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Contact() {
  return (
    <div className="contactBody">
      <Nav />
      <h2>Contact</h2>
      <div id="space1"></div>
      <div id="container1">
        <p>
          If you'd like to get in touch you can either email me or message me
          via GitHub. Feel free to voice any suggestions or related inquiries.
        </p>
      </div>

      <div id="container12">
        <p>
          Links:
          <ul>
            <li>
              <a href="https://github.com/jarrellrn">GitHub profile</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/robert-jarrell-3271951b1/">
                LinkedIn page
              </a>
            </li>
            <li>
              <a href="jarrellrn@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1ZKlkc13yBYTA2_wT7v8zVv6kHcy7sOjh/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Contact;
