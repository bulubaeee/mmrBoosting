import './App.css'
import './index.css'
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import TextBlock from './Components/Main_container/TextBlock';
import dota2Vid from './Components/../assets/dota2Vid.mp4';
import HomeContent from './Components/Main_container/Content/HomeContent';
import styles from './Components/Main_container/Background.module.css';

function App() {
  return (
    <>
      <Parallax pages={2} offset={0} style={{ top: '0', left: '0', border: 0, margin: 0 }} >
        <HomeContent />
        <ParallaxLayer
          speed={2.5}
          factor={1}
          id={styles.spectre}
          style={{ backgroundSize: 'cover' }}
        // className={styles.spec}
        >
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.3}
          factor={1}
          id={styles.spectre1}
          style={{ backgroundSize: 'cover', zIndex: 1 }}
          className={styles.spec}
        >
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.4}
          factor={1}
          id={styles.spectre2}
          style={{ backgroundSize: 'cover' }}
          className={styles.spec}

        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          factor={1}
          style={{
            backgroundSize: 'cover',
            position: 'absolute',
            zIndex: '5',
            // width: '100vw',
            height: '100vh', // Ensure it fills the entire viewport
          }}
        >
          <div className={styles.contentWrapper} style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <video
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                objectFit: 'cover', 
                zIndex: -1,
                opacity: 0.4,
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={dota2Vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <TextBlock />
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  )
}

export default App;

