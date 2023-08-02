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
    console.log(
      Array.from((tempref.current as HTMLElement).querySelectorAll("text"))
    );
  }, [tempref.current]);

  useEffect(() => {
    if (ref.current === null || ref.current === undefined) return;
    console.log(ref.current);
    const nodeArray = Array.from(
      (ref.current as HTMLElement).querySelectorAll("text")
    );

    console.log(nodeArray[0].innerHTML.toString());
    /* return; */

    const fx = new TextScramble(ref, nodeArray);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, [ref.current]);
  return (
    <header className={styles.header}>
      <div className={styles.blurrybg} />
      <div className={styles.blurrybg1} />
      <div ref={ref} className={styles.textContainer}>
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
