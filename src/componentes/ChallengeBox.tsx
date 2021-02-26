import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/componentes/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </main>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <img src="sleep.png" />
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando os desafios.
        </p>
          </div>
        )}
    </div>
  );
}
