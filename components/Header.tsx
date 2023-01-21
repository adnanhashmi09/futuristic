import styles from "@/styles/components/header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.textContainer}>
        <h2> Design </h2>
      </div>
    </header>
  );
}

export default Header;
