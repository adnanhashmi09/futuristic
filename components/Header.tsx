import styles from "@/styles/components/header.module.scss";
import { useEffect, useRef, useState } from "react";
import TextScramble from "@/lib/textScramble";

function Header(): JSX.Element {
  const [phrases, setphrases] = useState(["Design", "Transform", "Accelerate"]);
  const [headerText, setHeaderText] = useState("Design");

  const ref = useRef(null);
  const tempref = useRef(null);
  useEffect(() => {
    if (tempref.current === null) return;
    console.log(tempref.current.querySelectorAll("text"));
  }, [tempref.current]);

  /* useEffect(() => { */
  /*   const fx = new TextScramble(ref); */
  /**/
  /*   let counter = 0; */
  /*   const next = () => { */
  /*     fx.setText(phrases[counter]).then(() => { */
  /*       setTimeout(next, 1800); */
  /*     }); */
  /*     counter = (counter + 1) % phrases.length; */
  /*   }; */
  /**/
  /*   next(); */
  /* }, []); */
  return (
    <header className={styles.header}>
      <div ref={tempref} className={styles.textContainer}>
        <svg
          height="200"
          stroke="#fff"
          strokeWidth="2"
          className={styles.textLine}
          width="100%"
          fill="#fff"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {headerText}
          </text>
        </svg>
        <svg
          height="200"
          stroke="#fff"
          strokeWidth="2"
          className={styles.textLine}
          width="100%"
          fill="none"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {headerText}
          </text>
        </svg>
        <svg
          height="200"
          stroke="#fff"
          strokeWidth="2"
          className={styles.textLine}
          width="100%"
          fill="none"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {headerText}
          </text>
        </svg>
        <svg
          height="200"
          stroke="#fff"
          strokeWidth="2"
          className={styles.textLine}
          width="100%"
          fill="none"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {headerText}
          </text>
        </svg>
        <svg
          height="200"
          stroke="#fff"
          strokeWidth="2"
          className={styles.textLine}
          width="100%"
          fill="none"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            {headerText}
          </text>
        </svg>
      </div>
    </header>
  );
}

export default Header;
