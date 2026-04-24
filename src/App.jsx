import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

import Navbar from './components/Navbar';
import Bracket from './components/Bracket';
import Stats from './components/Stats';
import Contact from './components/Contact';

const firebaseConfig = {
  apiKey: 'AIzaSyADuOqXjAAkRyw1Ugb0e776hYiOEX4k8hM',
  authDomain: 'works-63ac5.firebaseapp.com',
  projectId: 'works-63ac5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [page, setPage] = useState('home');
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const upperMatches = matches.filter((m) => m.bracket === 'upper');

  useEffect(() => {
    const unsubMatches = onSnapshot(collection(db, 'matches'), (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setMatches(data);
    });

    const unsubPlayers = onSnapshot(collection(db, 'players'), (snap) => {
      const data = snap.docs.map((d) => d.data());
      setPlayers(data);
    });

    return () => {
      unsubMatches();
      unsubPlayers();
    };
  }, []);

  return (
    <div className="page">
      <h1 className="title">Tournament</h1>
      <Navbar setPage={setPage} />

      {page === 'home' && <Bracket matches={upperMatches} />}
      {page === 'stats' && <Stats players={players} />}
      {page === 'contact' && <Contact />}
    </div>
  );
}
