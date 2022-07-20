//Import navigation and footer
import styles from "./layout.module.css";
import Navigation from './navigation';
import Footer from "./footer";
import Quote from "./quote";
import TopWrapper from './topWrapper';

function Layout(props) {
  return (
    <div className={styles.main}>
      <TopWrapper />
      <main className={styles.mainPage}>{props.children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;