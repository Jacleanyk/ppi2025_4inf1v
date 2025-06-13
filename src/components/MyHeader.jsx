import styles from "./MyHeader.module.css";

export default function MyHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.fraseContainer}>
        <img src="https://academicoifrnedu-my.sharepoint.com/:u:/g/personal/v_figueiredo_academico_ifrn_edu_br/Ed7oKgXQzGtNnd7nM_qB_u4BNVdCO58U4sYNEdxhnteMLQ?e=V2sLHH" />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
    </header>
  );
}
