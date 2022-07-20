import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <p className={styles.story}>
          About:
          Fundada en la Ciudad de México en 2010, este año DGE celebra con
          orgullo 12 años de historia. Durante 1 década hemos creado los más
          impresionantes objetos contemporáneos de la más alta calidad, así como
          piezas de arte dignas de museo. La mano de obra de DGE es ampliamente
          considerada como insuperable, ya que cada pieza es hecha a mano por
          los talentosos artesanos de la compañía, en nuestros propios talleres
          en México.
        </p>

        <p className={styles.story}></p>
        <p className={styles.story}>Servicio al Cliente</p>
        <p className={styles.story}>Contacto</p>
        <p className={styles.story}>Redes Sociales</p>
      </div>
      <div className={styles.more}>more...</div>
    </footer>
  );
}
export default Footer;
