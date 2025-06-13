import styles from "./MyFooter.module.css";
import { Github, Instagram, Mail } from "lucide-react";

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>- IFRN - Instituto Federal De Ciências e Tecnologia do Rio Grande Do Norte</p>
        <p>- Campus Macau</p>
      </div>

      <div className={styles.center}>
        <p className={styles.name}>- Aluna:Jacleany Kelly Pereira do Nascimento</p>
      </div>

      <div className={styles.right}>
        <a href="https://github.com/Jacleanyk/ppi2025_4inf1v" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href="https://www.instagram.com/jacleany_kellyy?igsh=MWdod21odGFqd2duZA==
" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
}

