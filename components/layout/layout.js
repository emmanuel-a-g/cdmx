//Import navigation and footer
import styles from "./layout.module.css";
import Navigation from './navigation';
import Footer from "./footer";

function Layout(props) {
  return (
    <div className={styles.main}>
      <Navigation/>
      <main className={styles.mainPage}>{props.children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;