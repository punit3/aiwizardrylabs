import React from "react";
import { Carousel, Row } from "antd";
import "./testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { ContentWrapper } from "../MiddleBlock/styles";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

let testimony = [
  {
    content: `I've been fortunate to witness the development of the Edtech Bot firsthand. This incredible technology designed by Shivam has the potential to revolutionize education. Its interactive and personalized approach to learning is a game-changer. I'm excited to see the impact this will have on students' lives.`,
    name: "-Shrihari Bhat ",
    role: "DSDE at Google, US",
    color: "#e8ffeb",
  },
  {
    content: `As a cricket enthusiast, I've had the privilege of exploring Shivam's AI Umpiring Automation. It's mind-boggling how accurate and efficient this system is. Cricket, and sports in general, are about to enter a new era thanks to this innovation. I can't wait to see how it transforms the game.`,
    name: "-Sourabh Ghurye",
    role: "VP at Goldman Sachs and IIT Bombay CS",
    color: "#f7e8ff",
  },
  {
    content: `Having had a sneak peek into Shivam's creations, I'm left speechless. The Edtech Bot's ability to make learning engaging and interactive is a game-changer. It's going to alter the educational landscape forever. Similarly, the AI Umpiring Automation is poised to significantly improve the decision-making process in cricket. Shivam is truly a pioneer in both education and sports technology.`,
    name: "Ayush Pant",
    role: "Senior Software developer, Adobe",
    color: "#ffe9e9",
  },
  {
    content: `Shivam's work in the Edtech and sports automation domains is nothing short of awe-inspiring. His Edtech Bot is bound to empower countless students, making high-level education accessible and interactive. His AI Umpiring Automation is set to revolutionize sports adjudication, delivering precision and accuracy like never before. Shivam is on the cusp of something extraordinary.`,
    name: "Sandeep Dsouza",
    role: "PhD in CS, Carnegie Mellon University",
    color: "#e9e9ff",
  },
];
const Testimonails = () => (
  <div id="testimony" className="section-testimony">
    <h5>{"What people are saying about us"}</h5>

    <Carousel autoplay effect="fade" autoplaySpeed={5000}>
      {testimony.map((t, index) => {
        return (
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p style={{fontSize:"20px"}} className="font-style">
                 {t.content}
                </p>
              </blockquote>
              <h3 style={{fontSize:"20px",lineHeight:"28px"}}>{t.name}</h3>
              <h4>{t.role}</h4>
            </figcaption>
          </figure>
        );
      })}
    </Carousel>
  </div>
);
export default Testimonails;
