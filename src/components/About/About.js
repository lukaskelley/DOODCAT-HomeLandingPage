import React from "react";
import { Col, Row } from "antd";
import { Input } from "antd";
import { Button } from "antd";
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
          <Col xs={24} sm={20} md={12} lg={4} />
          <Col xs={24} sm={20} md={12} lg={16}>
            <div className="about-container">
              <ScrollAnimation animateIn="bounceInDown" duration={1.5}>
                <p className="top-title">
                  <img src={WelcomeIMG} alt="helloIMG" />
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" duration={4.5}>
                <Row className="stakingBtnContainer">
                  <Col lg={3} />
                  <Col lg={19} className="stakingBtn">
                    <a
                      href="https://app.doodcats.net/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DOODCAT Staking
                    </a>
                    <a
                      href="https://app.dedcats.net/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DEDCAT Staking
                    </a>
                    <a
                      href="https://app.doodcats.net/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SPACECATS Staking
                    </a>
                  </Col>
                  <Col lg={2} />
                </Row>
              </ScrollAnimation>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={4} />
        </Row>
      </section>
    </ScrollAnimation>
  );
};
