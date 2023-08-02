// react/next imports
import { useEffect, useState } from "react";

import styles from "@/styles/components/form.module.scss";

function Form(): JSX.Element {
  const [progress, setProgress] = useState(25);
  return (
    <section className={styles.formSection}>
      <form className={styles.form}>
        <fieldset>
          <label>
            <p> Name </p>
            <input type="text" placeholder="Elon Musk" required />
          </label>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            NEXT
          </button>
        </fieldset>
      </form>
      <div className={styles.progressContainer}>
        <p>{progress <= 9 ? `0${progress}` : progress}% </p>
        <div className={styles.progress}>
          <div className={styles.progressBar} />
        </div>
      </div>
    </section>
  );
}

export default Form;
