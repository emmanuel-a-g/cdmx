import styles from "./navigation.module.css";
import Link from "next/link";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/">
          <img src="./logo.png" width={100} className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.listRight}>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.anchor} title="home">
              Home
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/productos">
            <a className={styles.anchor} title="productos">
              Productos
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/servicios">
            <a className={styles.anchor} title="servicios">
              Servicios
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contacto">
            <a className={styles.anchor} title="contacto">
              Contacto
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
