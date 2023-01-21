import styles from "@/styles/components/process.module.scss";

const process = [
    {
        h: "Strategy to face the future",
        p: "We bring clarity to complex problems, uncover new opportunities, and help you develop innovation and design strategy that makes the most impact."
    },
    {
        h: "Strategy to face the future",
        p: "We bring clarity to complex problems, uncover new opportunities, and help you develop innovation and design strategy that makes the most impact."
    },
    {
        h: "Strategy to face the future",
        p: "We bring clarity to complex problems, uncover new opportunities, and help you develop innovation and design strategy that makes the most impact."
    },
    {
        h: "Strategy to face the future",
        p: "We bring clarity to complex problems, uncover new opportunities, and help you develop innovation and design strategy that makes the most impact."
    },
];

function Process() : JSX.Element{
    return (
        <section className={styles.wrap}>
            <div className={styles.divider} />
            <div className={styles.container}>
                {process.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <h2>0{index+1}</h2>
                        <h3>{item.h}</h3>
                        <p>{item.p}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Process;