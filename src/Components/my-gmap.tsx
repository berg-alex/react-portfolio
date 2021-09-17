import * as React from 'react';
import { Col, Container } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import '../App.css';
import {initMap} from "./gmap-circles";

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '20px 10px',
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


  function Mymap() {  

    const defaultProps = {
        center: {
          lat: 37.8272,
          lng: -122.2913
        },
        zoom: 5
      };
    
    
      const handleApiLoaded = (map, maps) => {
        // use map and maps objects
      };

    return (
        <div>
    
        <Container>
          <Col xs="12" sm="12" md="6" lg="6">
            <div id="map-size">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                yesIWantToUseGoogleMapApiInternals={true}
              >
              <AnyReactComponent
                // lat={37.8272}
                // lng={-122.2913}
                
                text="My Marker"
              />
              {initMap}
              {/* <initMap /> */}
              </GoogleMapReact>
              
            </div>
          </Col>
        </Container>
        </div>

);


}

export default Mymap;