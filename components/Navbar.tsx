// react/next imports
import { useEffect, useState } from "react";

// styles
import styles from "@/styles/components/navbar.module.scss";
import Link from "next/link";

// vendors

function Navbar(): JSX.Element {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className={styles.Navbar}>
      <div
        className={
          clicked ? `${styles.overlay} ${styles.clicked}` : styles.overlay
        }
      />
      <h1 className={clicked ? `${styles.clicked}` : ""}>Futuristic</h1>
      <div
        className={clicked ? `${styles.menu} ${styles.clicked}` : styles.menu}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <span />
        <span />
      </div>
      <ul
        className={
          clicked ? `${styles.navigation} ${styles.clicked}` : styles.navigation
        }
      >
        <li>
          <h2>01</h2>
          <Link href="#">Work</Link>
        </li>
        <li>
          <h2>02</h2>
          <Link href="#">Our Process</Link>
        </li>
        <li>
          <h2>03</h2>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
