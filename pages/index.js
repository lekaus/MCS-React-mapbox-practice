import React, { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function App() {
  const [marker, setMarker] = useState();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiemFzZW1vemVyIiwiYSI6ImNsNjl1Y3ZtNDBhczIzanFmejd4bnB3ZjUifQ.KJbLrIGXaJVEjNSDWjESbw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([37.6173, 55.7558])
      .addTo(map);

    setMarker(marker);
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839],
  };

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={(e) => marker.setLngLat(stores[e.target.value])}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

// render(<App />, document.querySelector("#root"));
