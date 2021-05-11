import styles from "./styles.module.scss";

export default function PHFProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personal Project</h1>
      <div className={styles.project}>
        <i className="fab fa-spotify" />
        <div>
          <p>Atemsfy</p>
          <span>Gerencia suas playlists do Spotify de uma maneira mais fácil e prática</span>
        </div>
      </div>
      <div className={styles.project}>
        <i className="fas fa-weight" />
        <div>
          <p>Weigth Control</p>
          <span>Gerencia suas playlists do Spotify de uma maneira mais fácil e prática</span>
        </div>
      </div>
      <div className={styles.project}>
        <i className="fas fa-coins" />
        <div>
          <p>FinCon</p>
          <span>Gerencia suas playlists do Spotify de uma maneira mais fácil e prática</span>
        </div>
      </div>
    </div>
  );
}
