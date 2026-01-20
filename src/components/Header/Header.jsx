import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        IFAS
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* Button */}
      <button className={styles.button}>
        Login
      </button>
    </header>
  );
}

export default Header;
