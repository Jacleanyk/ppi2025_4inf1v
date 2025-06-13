import styles from "./MyHeader.module.css";

export default function MyHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.fraseContainer}>
        <img src="src/components/imagens/bola_de_basquete_wilson_nba_forge_5_1421_1_b1d0f1cfd4f05ff328de001ea3700c22.webp" />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
    </header>
  );
}
