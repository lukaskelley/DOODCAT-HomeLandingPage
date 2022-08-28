import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { GoTopButton } from "./GoTopButtton";
import "antd/dist/antd.css";
import "./Footer.css";

export const Footer = () => {
  return (
    <section id="Footer">
      <Row className="Footer-row">
        <Col xs={24} sm={20} md={12} lg={4} />
        <Col xs={24} sm={20} md={12} lg={3}>
          <Row>
            <Col xs={24} sm={20} md={12} lg={3} />
            <Col xs={24} sm={20} md={12} lg={18} className="footer-btn_contain">
              <Button className="footer-btn">Get in Touch</Button>
            </Col>
            <Col xs={24} sm={20} md={12} lg={3} />
          </Row>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5} className="site-contain">
          <div className="site-link">
            <h1>SITE</h1>
            <p>
              <a href="https://anatha.io/">Homepage</a>
            </p>
            <p>
              <a href="https://anatha.io/app">Anatha App</a>
            </p>
            <p>
              <a href="https://anatha.io/blockchain-network">Network</a>
            </p>
            <p>
              <a href="https://anatha.io/project-anatha">Enterprise</a>
            </p>
            <p>
              <a href="https://anatha.io/about">About Us</a>
            </p>
            <p>
              <a href="https://anatha.io/whycrypto">Learn</a>
            </p>
            <p>
              <a href="https://anatha.io/blog">Blog</a>
            </p>
            <p>
              <a href="https://anatha.io/download">Downloads</a>
            </p>
            <p>
              <a href="https://anatha.io/press">Roadmap</a>
            </p>
            <p>
              <a href="https://anatha.io/download">Press</a>
            </p>
            <p>
              <a href="https://anatha.io/help">Help</a>
            </p>
            <p>
              <a href="https://anatha.io/glossary">Glossary</a>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5}>
          <div className="social_site-link">
            <h1>SOCIAL</h1>
            <p>
              <a href="https://discord.gg/KrNswyU">Discord</a>
            </p>
            <p>
              <a href="https://t.me/projectanatha">Reddit</a>
            </p>
            <p>
              <a href="https://medium.com/anatha-io">Telegram</a>
            </p>
            <p>
              <a href="https://medium.com/anatha-io">Medium</a>
            </p>
            <p>
              <a href="https://twitter.com/anatha_io">Twitter</a>
            </p>
            <p>
              <a href="https://www.instagram.com/anatha.io/">Instagram</a>
            </p>
            <p>
              <a href="https://www.youtube.com/channel/UC3lAxx3okv-gWt79KqHTywg">
                YouTube
              </a>
            </p>
            <p>
              <a href="https://twitter.com/anatha_io">Downloads</a>
            </p>
            <p>
              <a href="https://vimeo.com/anatha">Vimeo</a>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5}>
          <div className="social_site-link">
            <h1>LANGUAGES</h1>
            <p>
              <a href="https://anatha.io/japanese">
                <img
                  alt="????????"
                  src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg"
                  data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg"
                />
              </a>
            </p>
            <p>
              <a href="https://anatha.io/korean">
                <img
                  alt="????????"
                  src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg"
                  data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg"
                />
              </a>
            </p>
            <p>
              <a href="https://anatha.io/turkish">
                <img
                  alt="????????"
                  src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg"
                  data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg"
                />
              </a>
            </p>
            <p>
              <a href="https://anatha.io/chinese">
                <img
                  alt="????????"
                  src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg"
                  data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg"
                />
              </a>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4} />
      </Row>
      <Row className="Footer-row_whitepaper">
        <Col xs={24} sm={20} md={12} lg={11} />
        <Col xs={24} sm={20} md={12} lg={2} className="footer-btn_contain">
          <Button className="footer-btn">whitepaper</Button>
        </Col>
        <Col xs={24} sm={20} md={12} lg={11} />
      </Row>
      <Row className="Footer-row_Privacy">
        <Col xs={24} sm={20} md={12} lg={11} />
        <Col xs={24} sm={20} md={12} lg={2} className="footer-btn_contain">
          <a
            className="Footer-row_Privacy_link"
            href="https://www.anatha.io/privacy"
          >
            Privacy Policy
          </a>
        </Col>
        <Col xs={24} sm={20} md={12} lg={11} />
      </Row>
      <Row className="Footer-row_Privacy">
        <Col xs={24} sm={20} md={12} lg={3} />
        <Col xs={24} sm={20} md={12} lg={19} />
      </Row>
      <GoTopButton />
    </section>
  );
};
