import styles from "@/styles/components/callToAction.module.scss";
function CallToAction(): JSX.Element {
  return (
    <section className={styles.cta}>
      <p>
        <span>
          We’re here to <br />
          meet &nbsp;
        </span>
        your
        <br /> needs
      </p>
      <div className={styles.circle}>
        <p>Start a project</p>
      </div>
    </section>
  );
}

export default CallToAction;
