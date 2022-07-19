import styles from "./navigation.module.css";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img src="./logoDavid.png" width={100} className={styles.logo} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>Casa</li>
        <li className={styles.item}>Contacto</li>
        <li className={styles.item}>Sobre</li>
        <li className={styles.item}>Trabajos</li>
      </ul>
    </nav>
  );
}
export default Navigation;
