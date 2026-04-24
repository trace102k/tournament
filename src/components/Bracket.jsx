import MatchCard from './MatchCard';
import styles from './Bracket.module.css';

export default function Bracket({ matches }) {
  const rounds = ['Quarter', 'Semi', 'Final'];

  return (
    <div className={styles.wrapper}>
      {rounds.map((round) => (
        <div key={round} className={styles.column}>
          <h3 className={styles.title}>{round}</h3>

          <div className={styles.matches}>
            {matches
              .filter((m) => m.round === round)
              .map((match) => (
                <div key={match.id} className={styles.match}>
                  <MatchCard match={match} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
