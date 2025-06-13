import styles from "./MyMain.module.css";

export default function MyMain() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className={styles.card}>
            <img src={`https://picsum.photos/300/200?random=${id}`} alt={`Imagem aleatória ${id}`} />
            <h3>texto{id}</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). {id}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
