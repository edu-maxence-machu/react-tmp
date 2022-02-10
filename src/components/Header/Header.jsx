import styles from "./SHeader.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.HeadingClass}>Bienvenue sur mon site</h1>
      <h1 className={styles.HeadingClass}>Bienvenue sur mon test</h1>
    </header>
  );
};

export default Header;
