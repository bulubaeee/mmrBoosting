import React, { useState, useEffect } from 'react';
import cntcss from '../Content/content.module.css';
import MmrBoosting from '../Content/MMRBoosting';
import Nav from '../../Nav/Nav';
import ArcanaStyle2 from './ArcanaStyle2';

function HomeContent() {

    const dotaTips = [
        `Try to fight creeps and enemy Heroes within the attack range of your team's Towers.`,
        "Be careful when crossing the river into enemy territory.",
        "Remember to purchase items to restore your health and mana at the start of the game.",
    ];

    const [index, setIndex] = useState(0);
    const [showMmrBoosting, setShowMmrBoosting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dotaTips.length);
        }, 7000); // 7 seconds interval

        return () => clearInterval(interval);
    }, []);

    const handleShowMMRBoosting = () => setShowMmrBoosting(!showMmrBoosting);

    return (
        <>
            <Nav onShowMMRBoosting={handleShowMMRBoosting} />
            <div className={`${cntcss.Main_Container}`}>
                {showMmrBoosting && (
                        <MmrBoosting />
                )}

                <div className={`${cntcss.dotatipsAndArcs2}`}>
                    <div className={`${cntcss.dotatip}`}>
                        <h1><i className='bx bx-bulb'></i> Dota 2 Tips and tricks</h1>
                        <div className={`${cntcss.tips}`}>❗ {dotaTips[index]}</div>
                    </div>
                    <ArcanaStyle2 />
                </div>

            </div>
        </>
    );
}

export default HomeContent;
