import styles from "./productoPage.module.css";
import ProductoLista from "../utils/productoLista";

function ProductoPage() {
  return (
    <div className={styles.producto}>
      <h1 className={styles.title}>Producto</h1>
      <ProductoLista />
    </div>
  );
}

export default ProductoPage;
