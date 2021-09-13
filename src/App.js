import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Row, Col, Container } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import Lottie from 'react-lottie';
import animationData from './assets/66205-coding';
import video from "./assets/video-digital-info.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Contact from './Components/contact';
// import Skills from './Components/Skills';
// import Qualifications from './Components/Qualifications';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

function App() {
  const defaultProps = {
    center: {
      lat: 37.8272,
      lng: -122.2913
    },
    zoom: 5
  };
  const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // function Skills() {
  //   return <h2>Skills</h2>;
  // }
  
  // function Qualifications() {
  //   return <h2>Qualifications</h2>;
  // }

  //moved to component
  
  // function Contact() {
  //   return <h2>Contact</h2>;
  // }

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    <div>
      <HashRouter basename="/">
      <nav>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        <Navbar className='mynav' color="dark" dark expand="md">
          <Container className="nav-container">
          
            <Col className="navbrand" xs="12" sm="12" md="4" lg="4">
              <NavbarBrand href="/">Web Design <br/>& <br/> Frontend Development</NavbarBrand>
            </Col>

            <Col className="my-lottie" xs="12" sm="12" md="5" lg="5">
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
              />
            </Col>
            <Col className="navLinks" xs="12" sm="12" md="3" lg="3">  
              <NavItem className="navitems" style={{marginTop: "20px", marginBottom: "20px"}}>
                <Button className="navbutton" href="/Skills" style={{width: "150px"}}>Skills </Button>
              </NavItem>
              
              <NavItem className="navitems" style={{marginBottom: "20px"}}>
              <Button className="navbutton" href="/Qualifications" style={{width: "150px"}}>Qualifications </Button>
              </NavItem>

              <NavItem className="navitems" style={{marginBottom: "20px"}}>
              <Button className="navbutton" href="/Contact" style={{width: "150px"}}>Contact </Button>
              </NavItem>
            </Col>

          </Container>

        </Navbar>
      </nav>
      </HashRouter>

    <Container>
      <Col xs="12" sm="12" md="6" lg="6">
        <div className="my-map" id="map-size">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            yesIWantToUseGoogleMapApiInternals={true}
          >
          <AnyReactComponent
            lat={37.8272}
            lng={-122.2913}
            text="My Marker"
          />
          
          </GoogleMapReact>
          
        </div>
      </Col>
    </Container>
    <video width="100vw" opacity="60" autoPlay={true} loop muted >
      <source src={video} type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video> 
  </div>
);
}

export default App;