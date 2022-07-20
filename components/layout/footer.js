import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <p className={styles.story}>Fundada en la Ciudad de México en 1942,
         este año TANE celebra con orgullo 80 años de historia. Durante ocho décadas hemos creado las más impresionantes piezas de joyería para mujer y hombre, objetos contemporáneos de la más alta calidad, así como piezas de arte dignas de museo. La mano de obra de TANE es ampliamente considerada como insuperable, ya que cada pieza es hecha a mano por los talentosos artesanos de la compañía, en nuestros propios talleres en México.</p>

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
