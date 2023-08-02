import SectionHeader from "./resusable/SectionHeader";
import styles from "@/styles/components/process.module.scss";

const process = [
  {
    h: "Strategy to face the future",
    p: "We bring clarity to complex problems, uncover new opportunities, and help you develop innovation and design strategy that makes the most impact.",
  },
  {
    h: "Collaborative Ideation",
    p: "We foster collaborative thinking to generate innovative ideas, combining diverse perspectives and expertise to unlock creative solutions.",
  },
  {
    h: "User-Centric Design",
    p: "We prioritize understanding your target audience, crafting intuitive user experiences, and leveraging user insights to inform our design decisions.",
  },
  {
    h: "Iterative Refinement",
    p: "We embrace an iterative approach, continuously refining and enhancing designs based on user feedback, market trends, and evolving business goals.",
  },
];

function Process(): JSX.Element {
  return (
    <section className={styles.wrap}>
      <div className={styles.divider} />
      <div className={styles.container}>
        {process.map((item, index) => (
          <div key={index} className={styles.item}>
            <h2>0{index + 1}</h2>
            <h3>{item.h}</h3>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
