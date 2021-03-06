/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "../style.css";

// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.


interface City {
  center: google.maps.LatLngLiteral;
  population: number;
}

const citymap: Record<string, City> = {
  sanjose: {
    center: { lat: 37.3382, lng: -121.8863 },
    population: 1062000,
  },
  seattle: {
    center: { lat: 47.6061, lng: -122.3321 },
    population: 724300,
  },
  losangeles: {
    center: { lat: 34.052, lng: -118.243 },
    population: 3857799,
  },
  portland: {
    center: { lat: 45.5051, lng: -122.6750 },
    population: 645200,
  },
  lasvegas: {
    center: { lat: 36.1699, lng: -115.1398 },
    population: 634700,
  },
  phoenix: {
    center: { lat: 33.4484, lng: -112.0740 },
    population: 1630000,
  },
};

function initMap(): void {

  // Create the map.
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: 37.8272, lng: -122.2913 },
      mapTypeId: "terrain",
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
    
  }
}

function Mymap() {  

  
    google.maps.event.addDomListener(window, "load", initMap);

    return (
      <div></div>

      );
    }

    export default Mymap;


// export { initMap };
