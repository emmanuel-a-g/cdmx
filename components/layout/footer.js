import styles from "./footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <p className={styles.story}>
          About: Fundada en la Ciudad de México en 2010, este año DAE celebra
          con orgullo 12 años de historia. Durante 1 década hemos creado los más
          impresionantes objetos contemporáneos de la más alta calidad, así como
          piezas de arte dignas de museo. La mano de obra de DAE es ampliamente
          considerada como insuperable, ya que cada pieza es hecha a mano por
          los talentosos artesanos de la compañía, en nuestros propios talleres
          en México.
        </p>
        <p className={styles.story}></p>
        <p className={styles.story}>
          <Link href="/servicios">
            <a className={styles.anchor} title="servicio">
              Servicio al Cliente
            </a>
          </Link>
        </p>
        <p className={styles.story}>
          <Link href="/contacto">
            <a className={styles.anchor} title="contacto">
              Contacto
            </a>
          </Link>
        </p>
        <p className={styles.story}>
          <Link href="/">
            <a className={styles.anchor} title="redes sociales">
              Redes Sociales
            </a>
          </Link>
        </p>
      </div>
      <div className={styles.more}>
        <a href="https://emmanuelgarcia.dev" target="_blank">copyright 2022 | By @EAG</a>
      </div>
    </footer>
  );
}
export default Footer;
