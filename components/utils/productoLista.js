import Producto from "./producto";
import styles from "./productoLista.module.css";

function ProductoLista({data}) {
  data = [1, 2, 3, 4, 5];

  return (
  <div className={styles.productoLista}>
    {data.map((obj, index) => {
      return (
        <Producto />
      )
    })}
  </div>
  )
}
export default ProductoLista;