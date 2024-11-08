import { useEffect, useState } from "react";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([23.259, 77.4]);
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city?.emoji}</span>
              <span>{city?.name}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// Custom Component to set the location icon on city we clicked
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// component to route to forms on clicking on map anywhere
function DetectClick() {
  const navigate = useNavigate();
  // const handleClick = (e) => {
  //   navigate(`/city/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
  // };
  // return <MapContainer onClick={handleClick} />;
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
