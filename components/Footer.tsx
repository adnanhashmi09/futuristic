import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <h2>the Blox studio </h2>
      <ul>
        <li>
          <Link href="/#about"> About</Link>
        </li>
        <li>
          <Link href="/#ourprocess">Our Process</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
