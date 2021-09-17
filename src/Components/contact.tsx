import React from "react";
import '../contact.css';
import Mynav from "./my-nav";
import Lottie from 'react-lottie';
import animationData from '../assets/e-mail-box.json';
import { Col } from 'reactstrap';
import Linkedin from "./linkedin";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


 function Contact() {

  return (
  <div>
    <Mynav />

    <Linkedin />

    <Col xs="12" sm="12" md="12" lg="12">
      <div style={{width: "100px", margin: "auto auto"}}>
        <a href="mailto:abergsf2017@gmail.com" target="_blank" rel="noopener noreferrer">
          <Lottie    
            options={defaultOptions}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
          />
        </a>
      </div>
    </Col>
  </div>
  );

 }

 export default Contact;