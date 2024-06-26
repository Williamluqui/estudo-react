import styles from "./Sidebar.module.css";
import { FaPencilAlt } from "react-icons/fa";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/88260564?v=4"
          alt=""
        />
        <strong>William</strong>
        <span>Practicing react</span>
      </div>
      <footer>
        <a href="#">
          <FaPencilAlt size={14}/> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
