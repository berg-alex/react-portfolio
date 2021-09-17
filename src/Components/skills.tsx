// import '../assets/React-Roadmap copy.png';

import React from "react";
import '../contact.css';
// import video from "../assets/video-digital-info.mp4";
import Mynav from "./my-nav";
import { Col } from 'reactstrap';
import myimage from "../assets/react-roadmap-copy.png";



 function Skills() {

     return (
       <div>
        <Mynav />

        <Col xs="12" sm="12" md="12" lg="12">
            
                {/* <img src={Image} alt=""></img> */}
                <img style={{opacity: "0.8"}} src={myimage} className="img-fluid mx-auto d-block" alt="react roadmap"></img> 
            
        </Col>
       </div>
     );
 }

 export default Skills;