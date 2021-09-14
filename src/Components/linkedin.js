import React from "react";
import '../contact.css';
// import video from "../assets/video-digital-info.mp4";
import Mynav from "./my-nav";
import Lottie from 'react-lottie';
import animationData from '../assets/linkedin.json';
import { Col } from 'reactstrap';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  function Linkedin() {

    return (
      <div>
  <Col xs="12" sm="12" md="12" lg="12">
  <div style={{width: "100px", margin: "auto auto"}}>
  <a href="https://www.linkedin.com/in/alex-b-6676551b7/" target="_blank">
          <Lottie    
            options={defaultOptions}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
            pointer-events= {"none"}
          >
              
        </Lottie>
        </a>
        </div>
        
        </Col>

        </div>
     );

 }

 export default Linkedin;