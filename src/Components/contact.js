import React from "react";
import '../contact.css';
import video from "../assets/video-digital-info.mp4";
import Mynav from "./my-nav";



 function Contact() {

     return (
       <div>
        <Mynav />
         
         <video width="100vw" opacity="60" autoPlay={true} loop muted >
      <source src={video} type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video> 
       </div>
     );

 }

 export default Contact;