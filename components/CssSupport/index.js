import styles from "./Support.module.css";
import sass from "./Support2.module.scss";
function Index(props) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>Css Modules Support</div>
      <div className={sass.container}>Css Sass Support</div>
      <p>Next also supports Less, Stylus, Tailwind and CSS-in-JS options. </p>
    </div>

    // <div>
    //   <div>Css Modules Support</div>
    //   <div>Css Sass Support</div>
    //   <p>Next also supports Less, Stylus, Tailwind and CSS-in-JS options. </p>
    // </div>
  );
}

export default Index;
