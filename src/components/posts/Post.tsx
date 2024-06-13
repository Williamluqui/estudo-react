import styles from "./post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/88260564?v=4" alt="" />
          <div className={styles.authorInfo}>
            <strong>William luqui</strong>
            <span>Backend Developer</span>
          </div>
        </div>
        <time
          title={String(new Date().toISOString())}
          dateTime={String(new Date().toISOString())}
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil rerum error{" "}
        </p>
        <p>
          consectetur ea aliquid, fugit ipsum facilis aperiam, nostrum distinctio at
          dolores.
        </p>
        <p>
          <a href="#">Lorem ipsum dolor</a>
        </p>
        <a href="#">#projeto</a>
        <a href="#"> #react</a>
      </div>
    </article>
  );
}
