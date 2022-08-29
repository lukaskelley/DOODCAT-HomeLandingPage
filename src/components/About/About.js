import React from "react";
import { Col, Row } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "antd/dist/antd.css";
import "./About.css";
import WelcomeIMG from "../../assets/welcome.png";
import "./animate.css";
export const About = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="about">
        <Row gutter={[24, 24]} justify="center" className="about-row">
          <Col lg={4} />
          <Col lg={16}>
            <div className="about-container">
              <ScrollAnimation animateIn="bounceInDown" duration={1.5}>
                <p className="top-title">
                  <img src={WelcomeIMG} alt="helloIMG" />
                </p>
              </ScrollAnimation>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={4} />
        </Row>
      </section>
    </ScrollAnimation>
  );
};
