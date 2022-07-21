import styles from "./contactoPage.module.css";
function ContactoPage() {

  return (
    <div className={styles.contacto}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.info}>
        para mas informacion: correo@email.com
      </div>
    </div>
  );
}

export default ContactoPage;
