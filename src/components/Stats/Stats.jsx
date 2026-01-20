import styles from "./Stats.module.css";

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stat}>
        <h3>10+</h3>
        <p>Years of Excellence</p>
      </div>

      <div className={styles.stat}>
        <h3>100+</h3>
        <p>Courses Offered</p>
      </div>

      <div className={styles.stat}>
        <h3>10k+</h3>
        <p>Students Enrolled</p>
      </div>

      <div className={styles.stat}>
        <h3>95%</h3>
        <p>Success Rate</p>
      </div>
    </section>
  );
}

export default Stats;
