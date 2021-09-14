import React from "react";
import '../contact.css';
// import video from "../assets/video-digital-info.mp4";
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
        <div className="mail-size" style={{width: "100px", margin: "auto auto"}}>
        <a href="mailto:abergsf2017@gmail.com" target="_blank">
          <Lottie    
            options={defaultOptions}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
          />
        </a>
        </div>
        </Col>
        

        {/* <a className='Linkedin' href='https://www.linkedin.com/in/alex-b-6676551b7/'>
              <lottie-player id='linkedinAnimation'
                autoplay
                loop
                mode="normal"
                src="https://assets9.lottiefiles.com/packages/lf20_pWLTA9.json"
              ></lottie-player>
            </a> */}
         
         {/* <video id="bg-vid" width="100vw" opacity="60" autoPlay loop muted >
      <source src={video} type="video/mp4" poster="../asset/bg-poster.png"/>

      Sorry, your browser doesn't support embedded videos.
    </video>  */}
       </div>
     );

 }

 export default Contact;