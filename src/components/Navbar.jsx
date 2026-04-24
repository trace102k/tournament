import styles from './Navbar.module.css';

export default function Navbar({ setPage }) {
  return (
    <div className={styles.nav}>
      <button onClick={() => setPage('home')}>Главная</button>
      <button onClick={() => setPage('stats')}>Статистика</button>
      <button onClick={() => setPage('contact')}>Связь</button>
    </div>
  );
}
