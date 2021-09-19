import * as React from 'react';
import { Col, Container } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import '../App.css';
import {initMap} from "./gmap-circles";



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
        function init() {
          var mapCenter = new google.maps.LatLng(0, 0);
          var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            center: mapCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
          });
  
          // Create a draggable marker which will later on be binded to a
          // Circle overlay.
          var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(55, 0),
            draggable: true,
            title: "Drag me!",
          });
  
          // Add a Circle overlay to the map.
          var circle = new google.maps.Circle({
            map: map,
            radius: 3000000, // 3000 km
          });
  
          // Since Circle and Marker both extend MVCObject, you can bind them
          // together using MVCObject's bindTo() method.  Here, we're binding
          // the Circle's center to the Marker's position.
          // https://code.google.com/apis/maps/documentation/v3/reference.html#MVCObject
          circle.bindTo("center", marker, "position");
        }
        // Register an event listener to fire when the page finishes loading.
      google.maps.event.addDomListener(window, "load", initMap);
      };

      

    return (
        <div>
    
        <Container>
          <Col xs="12" sm="12" md="6" lg="6">
          {/* {initMap} */}
            {/* <div id="map-size"> */}
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                yesIWantToUseGoogleMapApiInternals={true}
              >
              {/* <AnyReactComponent
                // lat={37.8272}
                // lng={-122.2913}
                
                text="My Marker"
              /> */}
              
              
              </GoogleMapReact>
              
            {/* </div> */}
          </Col>
        </Container>
        </div>

);


}

export default Mymap;