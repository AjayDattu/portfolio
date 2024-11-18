import React from 'react';
import Particles from './particles';

const GitHubStats = () => {
  return (
    <div style={styles.container}>
      <h2 className='text-6xl italic font-bold'>⚡Git Stats ⚡</h2>
      <div style={styles.bentoContainer}>
        <div style={styles.bentoItem}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=ajaydattu&count_private=true&theme=react&border_radius=10"
            alt="streak stats"
            style={styles.image}
          />
        </div>
        <div style={styles.bentoItem}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ajaydattu&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10"
            alt="readme stats"
            style={styles.image}
          />
        </div>
        <div style={styles.bentoItem}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ajaydattu&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats"
            alt="top langs"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap:"20px",
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: '#fff', // Light text
  },
  bentoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    maxWidth: '1200px',
  },
  bentoItem: {
    backgroundColor: '#1e1e1e', // Dark background for items
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Slightly darker shadow for contrast
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
    width: '390px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default GitHubStats;
