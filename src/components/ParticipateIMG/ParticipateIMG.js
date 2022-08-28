import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./ParticipateIMG.css"

import Participant from "../../assets/Participant.jpg";

export const ParticipateIMG = () => {

  return (
    <section id="ParticipateIMG" >
        <Row className='ParticipateIMG-row'>
          <Col xs={24} sm={20} md={12} lg={12} >
            <div className="ParticipateIMG-container">
             <img src={Participant} alt="Participate" className='Participate-img'/>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={12} className="Participatedetail-container">
            <div className="Participatedetail-contain">
              <h1>Participate in a regenerative economy.</h1>
              <p>Just register an @name — which is one ANATHA token for one year and start earning. That’s it.</p>
            </div>
          </Col>
        </Row>
    </section>
  )
}
