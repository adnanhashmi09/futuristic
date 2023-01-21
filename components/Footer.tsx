import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <h2>Futuristic </h2>
      <ul>
        <li>
          <Link href=""> Work</Link>
        </li>
        <li>
          <Link href="">Our Process</Link>
        </li>
        <li>
          <Link href=""> Contact </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
