import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '@/scripts/firebase'

const styles = {
  container: {
    padding: '20px',
  },
  yearContainer: {
    marginBottom: '40px',
  },
  headerText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  itemContainer: {
    marginBottom: '10px',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  bodyText: {
    fontSize: '16px',
  }
};

function LeadershipList (leadershipData: Object) {
  const renderLeadershipForYear = (year: string, data: Object) => {
    return (
      <div key={year} style={styles.yearContainer}>
        <h2 style={styles.headerText}>{year} Executive Leadership</h2>
        {Object.entries(data).map(([title, value], index) => {
          if (!value) return null;

          return (
            <div key={index} style={styles.itemContainer}>
              <span style={styles.titleText}><strong>{title}:</strong></span>
              <span style={styles.bodyText}> {value.join(" & ")}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {Object.entries(leadershipData).map(([year, data]) => 
        renderLeadershipForYear(year, data)
      )}
    </div>
  );
};



// Represents leadership mappings for one year

interface LeadershipYear {
  [role: string]: string[];  // Each role can have an array of names
}
interface LeadershipData {
  [year: string]: LeadershipYear;
}

const FetchFirestoreData: React.FC = () => {
  const [data, setData] = useState<LeadershipData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'leadership'));
        const documents = querySnapshot.docs;
        const data = Object.fromEntries(documents.map(doc => [doc.id, doc.data()]));
        setData(data);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : LeadershipList(data)}
    </div>
  );
};

export default FetchFirestoreData;
