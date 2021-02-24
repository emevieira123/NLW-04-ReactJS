import styles from '../styles/componentes/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/emevieira123.png" alt="Emerson Vieira" />
      <div>
        <strong>Emerson Vieira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
