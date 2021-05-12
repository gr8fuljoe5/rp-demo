import styles from "./Dynamic.module.css";
export default function Hello1() {
  return (
    <section className={styles.container}>
      Hello World 2 (imported dynamically)
    </section>
  );
}
