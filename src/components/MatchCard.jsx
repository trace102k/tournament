import styles from './MatchCard.module.css';

export default function MatchCard({ match }) {
  const isWinner1 = match.winner === 'team1';
  const isWinner2 = match.winner === 'team2';

  return (
    <div className={styles.card}>
      <div className={`${styles.row} ${isWinner1 ? styles.winner : ''}`}>
        <span>{match.team1}</span>
        <span>{match.score1}</span>
      </div>

      <div className={`${styles.row} ${isWinner2 ? styles.winner : ''}`}>
        <span>{match.team2}</span>
        <span>{match.score2}</span>
      </div>
    </div>
  );
}
