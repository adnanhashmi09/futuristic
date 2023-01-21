import styles from "@/styles/components/sectionHeader.module.scss";

function SectionHeader({ title , subList} : {title : string, subList : string[]}): JSX.Element {
    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2>{title}</h2>
            </div>
            <div className={styles.right}>
                <p>{subList.join(", ")}</p>
                <div />
            </div>
        </section>
    );
}


export default SectionHeader;
