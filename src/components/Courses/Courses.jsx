import styles from "./Courses.module.css";

const courses = [
  { title: "Banking Exams" },
  { title: "SSC Exams" },
  { title: "UPSC Preparation" },
];

function Courses() {
  return (
    <section className={styles.section}>
      <h2>Our Popular Courses</h2>

      <div className={styles.cards}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.image}>Image</div>
            <h4>{course.title}</h4>
            <button>View Course</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
