// import '../assets/React-Roadmap copy.png';

import React from "react";
import '../contact.css';
// import video from "../assets/video-digital-info.mp4";
import Mynav from "./my-nav";
import { Col } from 'reactstrap';
import Image from "../assets/react-roadmap-copy.png";



 function Skills() {

     return (
       <div>
        <Mynav />

        <Col xs="12" sm="12" md="12" lg="12">
            <div className="skills-img" style={{textAlign: "center"}}>
                <img src={Image} alt=""></img> 
            </div>
        </Col>
       </div>
     );
 }

 export default Skills;