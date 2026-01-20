import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Achieve Success <br />
          with India’s No.1 <br />
          Online Exam Institute
        </h1>

        <p>
          Learn from expert mentors and crack competitive exams with
          structured courses and practice tests.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Explore Courses</button>
        </div>
      </div>

      <div className={styles.image}>
        <div className={styles.imagePlaceholder}>
          Image Here
        </div>
      </div>
    </section>
  );
}

export default Hero;
