import styles from "@/styles/components/footer.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <h2>Futuristic </h2>
      <ul>
        <li> Work </li>
        <li> Our Process </li>
        <li> Contact </li>
      </ul>
    </footer>
  );
}

export default Footer;
