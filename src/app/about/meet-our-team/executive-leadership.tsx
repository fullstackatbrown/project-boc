import React from 'react';


// Updated data structure to include multiple years of leadership
const leadershipData = {
  "2023-2024": {
    "Presidents": "Caroline Sassan & Ayan Rahman",
    "Vice President": "Lara Simshauser",
    "Gear Room Managers": "Adnan Aldabbagh & Laurie Tamayo",
    "Diversity & Inclusion Chair": "Anila Marks"
  },
  "2022-2023": {
    "Presidents": "Hannah Bashkow & Ulysses Chevez",
    "Vice President:": "Cal Stellato",
  },
  "2021-2022": {
    "Presidents": "Eva Kitlen & Aidan Wang",
    "Gear Room Managers": "Cali Rivera & Daniel Graves",
    "Diversity & Inclusion Chair": "Alec Lacerte"
  },
  "2019-2020": {
    "Presidents": "Max Kozlov & Anna Pasnau",
    "Vice President": "Gabi Gil",
    "Gear Room Managers": "Aidan Wang & Ainsley Clapp"
  },
  "2018-2019": {
    "Presidents": "Charlotte Haslett & Lucas Smolcic Larson",
    "Vice President": "Max Kozlov",
    "Gear Room Manager": "Ethan Pierce"
  },
  "2017-2018": {
    "Presidents": "Austen Sharpe & Zoe Gates",
    "Vice President": "Lucas Smolcic Larson",
    "Gear Room Manager": "Ethan Pierce"
  },
  "2016-2017": {
    "Presidents": "Charlotte Haslett & Clayton Sanford",
    "Vice President": "Lena Milton",
    "Gear Room Manager": "Camila Lupi"
  }
};

const LeadershipList = () => {
  const renderLeadershipForYear = (year: string, data: Object) => {
    return (
      <div key={year} style={styles.yearContainer}>
        <h2 style={styles.headerText}>{year} Executive Leadership</h2>
        {Object.entries(data).map(([title, value], index) => {
          if (!value) return null;

          return (
            <div key={index} style={styles.itemContainer}>
              <span style={styles.titleText}><strong>{title}:</strong></span>
              <span style={styles.bodyText}> {value}</span>
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

export default LeadershipList;
