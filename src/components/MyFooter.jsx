import styles from "./MyFooter.module.css";
import { Github, Instagram, Mail } from "lucide-react";

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>IFRN - Instituto Federal De Ciências e Tecnologia do Rio Grande Do Norte</p>
        <p>Campus Macau</p>
      </div>

      <div className={styles.center}>
        <p className={styles.name}>Aluno: Victor Alexandre Figueiredo De Oliveira</p>
      </div>

      <div className={styles.right}>
        <a href="https://github.com/alexandrefg11/ppi2025_4inf1v" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href="https://www.instagram.com/alexandrefgx?igsh=bXNwZnpkYjl3YTRj
" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://mail.google.com/mail/u/0/#chat/dm/u4kPACAAAAE">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
}

