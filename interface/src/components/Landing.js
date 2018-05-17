import React from 'react';
import background from '../background.jpg';

const styles = {
  backImg: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed!important',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  content: {
    textAlign: 'center',
    paddingTop: '20%',
    textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%'
  },
  whiteText: {
    color: 'white',
    letterSpacing: '5px'
  }
};

const Landing = () => (
  <div style={styles.backImg}>
    <div style={styles.content}>
      <h1 style={styles.whiteText} className="display-4">SM DIAGNOSTICS</h1>
      <p style={styles.whiteText}>ECS 2000 | FIBRAN 20 | EX-D | EX-DS</p>
    </div>
  </div>
);

export default Landing;