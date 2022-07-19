import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <p className={styles.story}>Footer</p>
        <p className={styles.story}>Footer</p>
        <p className={styles.story}>Footer</p>
        <p className={styles.story}>Footer</p>
      </div>
      <div className={styles.more}>
        more...
      </div>
    </footer>
  );
}
export default Footer;
