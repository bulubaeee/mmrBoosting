import mmrCss from './content.module.css';
import React, { useState, useEffect } from 'react';
import arcs_style2 from './arcs_style2.js';

function ArcanaStyle2() {
    const hero_names = ["Earthshaker", "Phantom Assassin", "Windranger", "Faceless Void", "Queen of Pain", "Razor", "Wraith King", "Ogre magi"];
    const vids = [arcs_style2.es2, arcs_style2.pa2, arcs_style2.wr2, arcs_style2.fv2, arcs_style2.qop2, arcs_style2.rzr2, arcs_style2.wk2, arcs_style2.ogre2];
    const [index, setIndex] = useState(0);

    // Automatically change the video every 14 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % hero_names.length);
        }, 14000);
        return () => clearInterval(interval);
    }, []);

    // Function to handle bullet clicks
    const handleBulletClick = (bulletIndex) => {
        setIndex(bulletIndex);
    };

    return (
        <>
            <div className={mmrCss.arcana_vid_pannel}>
                <h2 id={mmrCss.arc_names}>Arcana style 2: {hero_names[index]}</h2>
                <video
                    id={mmrCss.esArc}
                    src={vids[index]}
                    autoPlay
                    muted
                    disablePictureInPicture
                ></video>

                <div className={mmrCss.bullet_navigation}>
                    {hero_names.map((name, bulletIndex) => (
                        <div
                            key={bulletIndex}
                            className={`${mmrCss.bullet} ${bulletIndex === index ? mmrCss.selected : ''}`}
                            onClick={() => handleBulletClick(bulletIndex)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ArcanaStyle2;