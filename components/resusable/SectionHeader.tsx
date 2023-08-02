import styles from "@/styles/components/sectionHeader.module.scss";

function SectionHeader({
  title,
  subList,
  id,
}: {
  title: string;
  subList: string[];
  id: string;
}): JSX.Element {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.left}>
        <h2>{title.split(" ").join("\n")}</h2>
      </div>
      <div className={styles.right}>
        <p>{subList.join(", ")}</p>
        <div />
      </div>
    </section>
  );
}

export default SectionHeader;
