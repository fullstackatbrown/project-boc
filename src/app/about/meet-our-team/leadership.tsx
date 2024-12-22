import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from "firebase/database";

const LeadershipList = () => {
  const [names, setNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeadershipNames = async () => {
      const db = getDatabase();
      const dbRef = ref(db);

      try {
        const snapshot = await get(child(dbRef, 'leadership'));
        if (snapshot.exists()) {
          const leadershipData = snapshot.val();
          const fetchedNames = Object.values(leadershipData).map(entry => entry.name);
          setNames(fetchedNames);
        } else {
          console.log('No data available');
          setNames([]);
        }
      } catch (err) {
        console.error('Error fetching leadership names:', err);
        setError(err.message);
      }
    };

    fetchLeadershipNames();
  }, []);

  return (
    <div>
      <h1>Leadership</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {names.length > 0 ? (
          names.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default LeadershipList;
