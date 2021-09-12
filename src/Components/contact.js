import React from "react";
import {Link } from "react-router-dom";

 function Contact() {

     return (
       <div>
         <p>
           This is the first page.
           <br />
           Click on the button below.
         </p>
         <Link to="/"><button>
           Home
         </button>
         </Link>
       </div>
     );

 }

 export default Contact;