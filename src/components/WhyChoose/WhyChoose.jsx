import styles from "./WhyChoose.module.css";

function WhyChoose() {
  return (
    <section className={styles.section}>
      <h2>Why Choose IFAS Online?</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h4>Expert Faculty</h4>
          <p>Learn from experienced mentors and subject experts.</p>
        </div>

        <div className={styles.card}>
          <h4>Structured Courses</h4>
          <p>Well-planned curriculum for exam-focused preparation.</p>
        </div>

        <div className={styles.card}>
          <h4>Affordable Pricing</h4>
          <p>High quality education at student-friendly prices.</p>
        </div>

        <div className={styles.card}>
          <h4>Proven Results</h4>
          <p>Thousands of students selected in top exams.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
