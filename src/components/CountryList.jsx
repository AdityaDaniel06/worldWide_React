import styles from './CountryList.module.css';
function CountryList() {
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>🏖️</span> <span>Indonesia </span>
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to Java ,Bali on</h6>
        <p>Aug 2024</p>
      </div>
      <div className={styles.row}>
        <h6>Your notes</h6>
        <p>Special trip..</p>
      </div>
    </div>
  );
}

export default CountryList;
