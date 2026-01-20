import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>IFAS Online</h3>
      <p>
        Empowering students with quality education and expert guidance.
      </p>
      <span>© 2026 IFAS Online. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
