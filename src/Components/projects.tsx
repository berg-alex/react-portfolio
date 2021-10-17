// import '../assets/React-Roadmap copy.png';

import React from "react";
import '../contact.css';
// import video from "../assets/video-digital-info.mp4";
import Mynav from "./my-nav";
import { Col } from 'reactstrap';
import myimage from "../assets/react-roadmap-copy.png";
import CarouselTest from '../Components/carousel';
import "../projects.css";


 function Projects() {

     return (
       <div>
        <Mynav />

        <Col xs="12" sm="12" md="12" lg="12">
            
                {/* <img src={Image} alt=""></img> */}
                <CarouselTest/>
                <div className="demoLink"><a href="http://54.188.44.165/">View live demo</a></div>
        </Col>
       </div>
     );
 }

 export default Projects;