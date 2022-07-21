import styles from "./productoPage.module.css";

function ProductoPage({ data }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Productos</h1>
      <div className={styles.list}>
        {data ? (
          data.map((obj, index) => {
            return <div>{obj}</div>;
          })
        ) : (
          <div>Coming soon...</div>
        )}
      </div>
    </div>
  );
}

export default ProductoPage;
