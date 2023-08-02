import styles from "@/styles/components/callToAction.module.scss";
function CallToAction(): JSX.Element {
  return (
    <section id="work" className={styles.cta}>
      <p>
        <span>
          We’re here to <br />
          meet{" "}
        </span>
        your
        <br /> needs
      </p>
      <div className={styles.right}>
        <img src="/Vectorline.svg" alt="vector curved line" />
        <div className={styles.circle}>
          <p>Start a project</p>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
