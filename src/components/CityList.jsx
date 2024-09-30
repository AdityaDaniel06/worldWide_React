import styles from './CityList.module.css';
function CityList() {
  return (
    <>
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>🌴</span> <span>Goa</span>
          </h3>
        </div>

        <div className={styles.row}>
          <h6>You went to Goa on</h6>
          <p>Nov 2022</p>
        </div>
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>Trips with friends</p>
        </div>
      </div>
    </>
  );
}

export default CityList;
