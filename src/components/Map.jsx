import styles from "./Map.module.css";
import map_bg from "../../public/10-8.webp";
import { Container } from "react-bootstrap";
function Map() {
  return (
    <Container>
      <div className={styles.mapContainer}>
        <img src={map_bg} alt="map" className="w-100 " />
      </div>
    </Container>
  );
}

export default Map;
