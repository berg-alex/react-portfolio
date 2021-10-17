import React from "react";
import {Link } from "react-router-dom";
// import '../contact.css';
import { Navbar, NavbarBrand, NavItem, Button, Col, Container } from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from '../assets/66205-coding.json';
import '../App.css';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

 function Mynav() {

     return (
       <div>
         <nav>
        
        <Navbar className='mynav' color="dark" dark expand="md">
          <Container className="nav-container">
          
            <Col className="navbrand" xs="12" sm="12" md="4" lg="4">
              <Link to="/"><NavbarBrand>Web Design <br/>& <br/> Frontend Development</NavbarBrand></Link>
            </Col>

            <Col className="my-lottie" xs="12" sm="12" md="5" lg="5">
              <Lottie 
                options={defaultOptions}
                height={300}
                width={300}
              />
            </Col>
            <Col className="navLinks" xs="12" sm="12" md="3" lg="3">  
              <NavItem className="navitems" style={{marginTop: "20px", marginBottom: "20px"}}>
              <Link to="/skills"><Button className="navbutton" style={{width: "150px"}}>Skills </Button></Link>
              </NavItem>
              
              <NavItem className="navitems" style={{marginBottom: "20px"}}>
              <Link to="/projects"><Button className="navbutton" style={{width: "150px"}}>Projects </Button></Link>
              </NavItem>

              <NavItem className="navitems" style={{marginBottom: "20px"}}>
                <Link to="/contact"><Button className="navbutton" style={{width: "150px"}}>Contact </Button></Link>
              </NavItem>
            </Col>

          </Container>

        </Navbar>
       
      </nav>
       
       </div>
     );

 }

 export default Mynav;