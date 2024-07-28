import React from "react";
import "./Contact.css";
import Cont from "./Assets/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Conatct() {
  return (
    <>
      <h4 className="text-center">Conatct</h4>
      <h1 className="text-center">Contact With Me</h1>
      <div className="container main">
        <div className="row sub">
          <div className=" col txt">
            <div>
              <img src={Cont} alt="" className="imgWrapper" />
            </div>
            <div>
              <h1>Ravi N</h1>
              <p>Full Stack Developer</p>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <p>
                Phone: +01234567890 <br />
                Email: admin@example.com
              </p>
            </div>
            <h3>Find me with</h3>
            <div>
              <div className="conicons" id="conicons">
                <a href="https://www.linkedin.com/in/ravi-mern-reactjs-nodejs/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <br />
                <a href="https://www.instagram.com/vr_ravi_7_10_46/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <br />
                <a href="https://wa.me/9686595916">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
          <div className=" col form">
            <div>
              <label htmlFor="">Your Name </label>
              <input type="text" /> <br />
              <label htmlFor="">Phone Number</label>
              <input type="number" /> <br />
              <label htmlFor="">Email</label>
              <input type="email" /> <br />
              <label htmlFor="">Your Message</label>
              <textarea name="" id=""></textarea> <br />
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Conatct;
