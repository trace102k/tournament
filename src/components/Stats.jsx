import { useState } from 'react';
import styles from './Stats.module.css';

export default function Stats({ players }) {
  const [sortBy, setSortBy] = useState('kills');

  const sortedPlayers = [...players].sort((a, b) => {
    const kdaA = (a.kills + a.assists) / (a.deaths || 1);
    const kdaB = (b.kills + b.assists) / (b.deaths || 1);

    switch (sortBy) {
      case 'kills':
        return b.kills - a.kills;

      case 'deaths':
        return a.deaths - b.deaths;

      case 'assists':
        return b.assists - a.assists;

      case 'kda':
        return kdaB - kdaA;

      default:
        return 0;
    }
  });

  return (
    <>
      <h2 className={styles.title}>Топ игроков по статистике</h2>

      <div className={styles.btnWrapper}>
        <button onClick={() => setSortBy('kills')} className={styles.btn}>
          Kills
        </button>

        <button onClick={() => setSortBy('deaths')} className={styles.btn}>
          Deaths
        </button>

        <button onClick={() => setSortBy('assists')} className={styles.btn}>
          Assists
        </button>

        <button onClick={() => setSortBy('kda')} className={styles.btn}>
          KDA
        </button>
      </div>

      <div className={styles.wrapper}>
        {sortedPlayers.map((p) => (
          <div key={p.name} className={styles.card}>
            <p className={styles.name}>{p.name}</p>

            <p className={styles.stats}>
              {p.kills}/{p.deaths}/{p.assists} | KDA : {((p.kills + p.assists) / (p.deaths || 1)).toFixed(1)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
