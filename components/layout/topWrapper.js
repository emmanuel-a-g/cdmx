import Navigation from "./navigation";
import Quote from "./quote";
import styles from "./topWrapper.module.css";
function TopWrapper() {
  return (
    <div className={styles.topWrapper}>
      <Navigation />
      <Quote />
    </div>
  );
}

export default TopWrapper;
