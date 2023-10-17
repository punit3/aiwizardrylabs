import React from "react";
import { Carousel, Row } from "antd";
import "./teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

const Teams = () => (
  <section id="teams" className="team-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center">
            <h6>
              Our <span>Team</span>
            </h6>
            <h7>Meet our awesome and expert team members</h7>
          </div>
          <div className="middle-block-container">
            <div className="col-md-4 single-item">
              <div className="item">
                <div className="thumb">
                  <p className="font-style">
                   
                    <ul
                      style={{
                        // width: "500px",
                        textAlign: "justify",
                        padding: "50px",
                      }}
                    >
                      <li>Experience of building complex mathematical Models at world's top bank Goldman Sachs for 4 years as a Quant-strategist.</li>
                     
                      <li>
                      Holds a patent in Artificial Intelligence granted by Govt of India [ Patent no. 344109 ] 
                      </li>
                      <li>
                        Leveraging his education from IIT Kharagpur and
                        strategic experience from Goldman Sachs to steer the
                        team.
                      </li>
                      {/* <li>
                        Recognized by the Indian government with an AI patent.
                      </li>
                      <li>
                        Shivam's visionary leadership continually inspires the
                        team to innovate and translate ideas into tangible,
                        life-changing solutions.
                      </li> */}
                    </ul>
                  </p>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </span>
                  <h4 style={{ fontSize: "22px", lineHeight: "28px" }}>
                    Shivam Saxena
                  </h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 single-item">
              <div className="item">
                <div className="thumb">
                  <p className="font-style">
                    <ul
                      style={{
                        
                        textAlign: "justify",
                        padding: "50px",
                      }}
                    >
                      <li>Our esteemed advisor and mentor.</li>
                      <li>An accomplished inventor with 87 patents.</li>
                      <li>An ex-NASA scientist.</li>
                      <li>
                        The visionary behind the CMOS image sensor that
                        transformed digital photography.
                      </li>
                      <li>
                        Played an instrumental role in advancing our lives and
                        changing the way the world captures moments just about
                        anytime and anywhere.
                      </li>
                      {/* <li>
                        Known for his significant contributions to the field of
                        image sensor technology and its applications.
                      </li> */}
                    </ul>
                  </p>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </span>
                  <h4 style={{ fontSize: "22px", lineHeight: "28px" }}>
                    {" "}
                    Bedabrata Pain
                  </h4>
                  <span>Mentor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Teams;
