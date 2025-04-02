import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';
import MmrCss from '../Content/content.module.css';
import medals from './dota2Medals.js';
import PayPalButtonComponent from './PayPalButtonComponent.jsx'


const generateMarks = (count) => {
    const marks = [];
    const stepValue = 12000 / (count - 1);

    for (let i = 0; i < count; i++) {
        marks.push(
            <div key={i} className={MmrCss.markContainer}>
                <div
                    className={MmrCss.mark}
                    style={{
                        left: `${i * 55}px`,
                    }}
                />
                <p className={MmrCss.markLabel} style={{ left: `${i * 55}px` }}>
                    {Math.round(i * stepValue)}
                </p>
            </div>
        );
    }
    return marks;
};


const getImageDetailsForMMR = (mmr) => {
    const ranges = [
        { min: -Infinity, max: 0, image: medals.uncalib, description: 'Uncalibrated' },
        { min: 1, max: 163, image: medals.herald1, description: 'Herald I' },
        { min: 164, max: 317, image: medals.herald2, description: 'Herald II' },
        { min: 318, max: 471, image: medals.herald3, description: 'Herald III' },
        { min: 472, max: 625, image: medals.herald4, description: 'Herald IV' },
        { min: 626, max: 779, image: medals.herald5, description: 'Herald V' },
        { min: 780, max: 933, image: medals.guardian1, description: 'Guardian I' },
        { min: 934, max: 1087, image: medals.guardian2, description: 'Guardian II' },
        { min: 1088, max: 1241, image: medals.guardian3, description: 'Guardian III' },
        { min: 1242, max: 1395, image: medals.guardian4, description: 'Guardian IV' },
        { min: 1396, max: 1549, image: medals.guardian5, description: 'Guardian V' },
        { min: 1550, max: 1703, image: medals.crusader1, description: 'Crusader I' },
        { min: 1704, max: 1857, image: medals.crusader2, description: 'Crusader II' },
        { min: 1858, max: 2011, image: medals.crusader3, description: 'Crusader III' },
        { min: 2012, max: 2165, image: medals.crusader4, description: 'Crusader IV' },
        { min: 2166, max: 2319, image: medals.crusader5, description: 'Crusader V' },
        { min: 2320, max: 2473, image: medals.archon1, description: 'Archon I' },
        { min: 2474, max: 2627, image: medals.archon2, description: 'Archon II' },
        { min: 2628, max: 2781, image: medals.archon3, description: 'Archon III' },
        { min: 2782, max: 2935, image: medals.archon4, description: 'Archon IV' },
        { min: 2936, max: 3089, image: medals.archon5, description: 'Archon V' },
        { min: 3090, max: 3243, image: medals.legend1, description: 'Legend I' },
        { min: 3244, max: 3397, image: medals.legend2, description: 'Legend II' },
        { min: 3398, max: 3551, image: medals.legend3, description: 'Legend III' },
        { min: 3552, max: 3705, image: medals.legend4, description: 'Legend IV' },
        { min: 3706, max: 3859, image: medals.legend5, description: 'Legend V' },
        { min: 3860, max: 4013, image: medals.ancient1, description: 'Ancient I' },
        { min: 4014, max: 4167, image: medals.ancient2, description: 'Ancient II' },
        { min: 4168, max: 4321, image: medals.ancient3, description: 'Ancient III' },
        { min: 4322, max: 4475, image: medals.ancient4, description: 'Ancient IV' },
        { min: 4476, max: 4629, image: medals.ancient5, description: 'Ancient V' },
        { min: 4620, max: 4829, image: medals.divine1, description: 'Divine I' },
        { min: 4830, max: 5029, image: medals.divine2, description: 'Divine II' },
        { min: 5030, max: 5229, image: medals.divine3, description: 'Divine III' },
        { min: 5230, max: 5429, image: medals.divine4, description: 'Divine IV' },
        { min: 5430, max: 5619, image: medals.divine5, description: 'Divine V' },
        { min: 5430, max: 11000, image: medals.immortal, description: 'Immortal' },
        { min: 11001, max: 12000, image: medals.immortal100, description: 'Immortal top 100' },
    ];


    const range = ranges.find(r => mmr >= r.min && mmr <= r.max);

    const image = range ? range.image : medals.uncalib;
    const description = range ? range.description : 'Uncalibrated';
    return { image, description };
};

function MMRBoosting() {
    const [range, setRange] = useState([0, 12000]);
    const [startingMedalDescription, setStartingMedalDescription] = useState('Uncalibrated');
    const [desiredMedalDescription, setDesiredMedalDescription] = useState('Immortal top 100');

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        const startingMMRDetails = getImageDetailsForMMR(newRange[0]);
        const desiredMMRDetails = getImageDetailsForMMR(newRange[1]);

        setStartingMedalDescription(startingMMRDetails.description);
        setDesiredMedalDescription(desiredMMRDetails.description);
    };

    const handleInputChange = (e, index) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value === '') {
            value = '0';
        }

        value = Math.max(0, Math.min(parseInt(value, 10), 12000));
        const newRange = [...range];
        newRange[index] = value;
        handleRangeChange(newRange);
    };



    const [isSafelaneActive, setSafelaneActive] = useState(1);
    const [isMidlaneActive, setMidlaneActive] = useState(2);
    const [isOfflaneActive, setOfflaneActive] = useState(3);
    const [isSoftSuppActive, setSoftSuppActive] = useState(4);
    const [isHardSuppActive, setHardSuppActive] = useState(5);

    const [isSoloActive, setSoloActive] = useState(true);

    const rolesArray = [isSafelaneActive, isMidlaneActive, isOfflaneActive, isSoftSuppActive, isHardSuppActive];

    // const [totalBillUsd, setTotalBillUsd] = useState(0);
    const [totalBillUsd, setTotalBillUsd] = useState(0);

    const [paymentMethod, setPaymentMethod] = useState("");
    const [selectedRoles, setSelectedRoles] = useState("");

    // useEffect(() => {

    // }, [isMidlaneActive, isSafelaneActive, isOfflaneActive, isSoftSuppActive, isSoloActive, rolesArray]);

    const filteredRoles = rolesArray.filter(role => role !== 0);
    const displayText =
        filteredRoles.length === 0 ? "Please select role" :
            filteredRoles.length === rolesArray.length ? "Any Role" :
                `${filteredRoles.join(", ")} Role`;


    const calculateBill = (range) => {
        let total = 0;
        let [start, end] = range;

        const tiers = [
            { limit: 2000, rate: 0.025 },
            { limit: 3000, rate: 0.035 },
            { limit: 4000, rate: 0.045 },
            { limit: 4500, rate: 0.075 },
            { limit: 5000, rate: 0.150 },
            { limit: 5500, rate: 0.250 },
            { limit: 6000, rate: 0.350 },
            { limit: 7000, rate: 0.450 },
            { limit: 8000, rate: 0.550 },
            { limit: 9000, rate: 0.650 },
            { limit: 12000, rate: 0.850 },
        ];

        for (let i = 0; i < tiers.length; i++) {
            if (start >= tiers[i].limit) continue;
            let tierStart = Math.max(start, i === 0 ? 0 : tiers[i - 1].limit);
            let tierEnd = Math.min(end, tiers[i].limit);
            if (tierStart < tierEnd) {
                { isSoloActive ? total += (tierEnd - tierStart) * tiers[i].rate : total += (tierEnd - tierStart) * tiers[i].rate * 1.5 }
            }
        }

        return total;
    };

    useEffect(() => {
        if (isSoloActive) {
            const billUsd = calculateBill(range);
            setTotalBillUsd(parseFloat(billUsd.toFixed(2)));
        } else {
            const billPhp = calculateBill(range);
            setTotalBillUsd(parseFloat(billPhp.toFixed(2)));
        }
    }, [isSoloActive]);

    useEffect(() => {
        const billUsd = calculateBill(range);
        setTotalBillUsd(parseFloat(billUsd.toFixed(2)));
    }, [range]);



    const handle_boost = isSoloActive ? 'Solo boost' : 'Party boost';
    let mmr_value = range[1] - range[0];

    let boost_duration;

    if (range[1] < 5000) {
        boost_duration = Math.round(mmr_value / 200)
    } else if (range[1] > 5000 && range[1] < 6000) {
        boost_duration = Math.round(mmr_value / 150)
    } else (
        boost_duration = Math.round(mmr_value / 100)
    )

    const adjustDesiredMMR = () => {
        if (range[1] <= range[0] && range[0] != 12000) {
            setRange([range[0], range[0] + 100]);
        }
    }


    console.log(paymentMethod)
    return (
        <div className={`bg-white-300/20 backdrop-blur-[10px] ${MmrCss.MmrPannel}`}>
            <h1 className={`${MmrCss.MmrAndRecalib_header}`}>
                MMR BOOSTING AND RECALIBRATION
            </h1>

            <button
                id={MmrCss.solo_boost}
                className={`${MmrCss.solo_or_party} ${isSoloActive ? MmrCss.active : ''}`}
                onClick={() => {
                    setSoloActive(true);
                }}
            >Solo boost</button>

            <button
                id={MmrCss.party_boost}
                className={`${MmrCss.solo_or_party} ${isSoloActive ? `` : MmrCss.active}`}
                onClick={() => {
                    setSoloActive(false);
                }}


            >Party boost</button>

            <div className={MmrCss.Preffered_roles}>

                <div
                    id={MmrCss.midlane}
                    className={`${MmrCss.roles} ${isMidlaneActive === 2 ? MmrCss.active : ''}`}
                    onClick={() => setMidlaneActive(isMidlaneActive === 2 ? 0 : 2)}
                >
                    <label htmlFor={MmrCss.midlane}>midlane</label>
                    <div className={`${MmrCss.midlane}`}></div>
                </div>

                <div
                    id={MmrCss.safelane}
                    className={`${MmrCss.roles} ${isSafelaneActive === 1 ? MmrCss.active : ''}`}
                    onClick={() => setSafelaneActive(isSafelaneActive === 1 ? 0 : 1)}
                >
                    <label htmlFor={MmrCss.safelane}>safelane</label>
                    <div className={`${MmrCss.safelane}`}></div>
                </div>

                <div
                    id={MmrCss.offlane}
                    className={`${MmrCss.roles} ${isOfflaneActive === 3 ? MmrCss.active : ''}`}
                    onClick={() => setOfflaneActive(isOfflaneActive === 3 ? 0 : 3)}
                >
                    <label htmlFor={MmrCss.offlane}>offlane</label>
                    <div className={`${MmrCss.offlane}`} ></div>
                </div>

                <div
                    id={MmrCss.soft_supp}
                    className={`${MmrCss.roles} ${isSoftSuppActive === 4 ? MmrCss.active : ''}`}
                    onClick={() => setSoftSuppActive(isSoftSuppActive === 4 ? 0 : 4)}
                    title='pos 4'
                >
                    <label htmlFor={MmrCss.soft_supp}>soft support</label>
                    <div className={`${MmrCss.soft_supp}`}></div>
                </div>

                <div
                    id={MmrCss.hard_supp}
                    className={`${MmrCss.roles} ${isHardSuppActive === 5 ? MmrCss.active : ''}`}
                    onClick={() => setHardSuppActive(isHardSuppActive === 5 ? 0 : 5)}
                >
                    <label htmlFor={MmrCss.hard_supp}>hard support</label>
                    <div className={`${MmrCss.hard_supp}`}>
                    </div>
                </div>
            </div>

            <div className={`${MmrCss.paymentMethodsPannel}`}>

                <div

                    id={MmrCss.paypal}
                    className={`${MmrCss.payment_logos} ${paymentMethod === "Paypal" ? MmrCss.active : ''} ${MmrCss.paypal}`}
                    onClick={() => setPaymentMethod("Paypal")}
                    style={{ opacity: 1 }}
                // onClick={() => { setCheckout(true) }}
                >
                </div>

                <div

                    id={MmrCss.gcash}
                    className={`${MmrCss.payment_logos} ${paymentMethod === "Gcash" ? MmrCss.active : ''} ${MmrCss.gcash}`}
                    onClick={() => setPaymentMethod("Gcash")}
                >
                </div>

                <div
                    id={MmrCss.bdo}
                    className={MmrCss.payment_logos}
                >
                </div>

                <div
                    id={MmrCss.bpi}
                    className={MmrCss.payment_logos}
                >
                </div>

                <div
                    id={MmrCss.union_bank}
                    className={MmrCss.payment_logos}
                >
                </div>

                <div
                    id={MmrCss.alipay}
                    className={MmrCss.payment_logos}
                >
                </div>

                <div
                    id={MmrCss.visa}
                    className={MmrCss.payment_logos}
                >
                </div>

                <div
                    id={MmrCss.american_express}
                    className={MmrCss.payment_logos}
                >
                </div>

            </div>

            <div className={`${MmrCss.volumeControl}`}>
                <Slider
                    min={0}
                    max={12000}
                    value={range}
                    onChange={handleRangeChange}
                    className={`${MmrCss.volumeBar}`}
                    thumbClassName={MmrCss.thumb}
                    trackClassName={MmrCss.track}
                />

                <div className={MmrCss.rulerLine}>
                    {generateMarks(13)}
                </div>

            </div>

            <div id={`${MmrCss.Starting_Medal}`}>
                <p className={MmrCss.mmrDescription}>
                    {startingMedalDescription}
                </p>

                <img
                    src={getImageDetailsForMMR(range[0]).image}
                    alt="Starting MMR"
                    className={MmrCss.mmrImage}
                    onError={(e) => e.target.src = '/images/mmr/default.png'}
                />
                <h2 className={MmrCss.H_DesireMmr}>Starting MMR</h2>
                <input
                    className={MmrCss.input_mmr}
                    type="text"
                    value={range[0]}
                    onChange={(e) => handleInputChange(e, 0)}
                />

            </div>

            <div id={`${MmrCss.Desire_Medal}`}>
                <p className={MmrCss.mmrDescription}>
                    {desiredMedalDescription}
                </p>
                <img
                    src={getImageDetailsForMMR(range[1]).image}
                    alt="Desired MMR"
                    className={MmrCss.mmrImage}
                    onError={(e) => e.target.src = '/images/mmr/default.png'}
                />
                <h2 className={MmrCss.H_DesireMmr}>Desired MMR</h2>
                <input
                    className={MmrCss.input_mmr}
                    type="text"
                    value={range[1]}
                    onChange={(e) => handleInputChange(e, 1)}
                    onBlur={adjustDesiredMMR}
                />

                <div className={MmrCss.orders}>
                    <p id={MmrCss.clientOrder}><span
                        style={{
                            color: 'cyan',
                            fontSize: '1.5rem',
                            fontStyle: 'italic',
                        }}
                    >  {`${handle_boost}`} </span> from {` ${range[0]} `}-{` ${range[1]} ,`} {`${displayText} `}
                        MMR approximately
                        {` ${boost_duration}`}
                        days, Total of {/* <span className='text-[#FFD700] text-2xl'>{` ${totalBillUsd} $`}</span> or */} <span className='text-[#FFD700] text-2xl'>{` ${totalBillUsd} $`}{' '}</span>
                        payment via <span className="text-2xl text-cyan-300">{` ${paymentMethod}`}</span>
                    </p>
                    {/* <button className="text-2xl border-2 border-white pl-[70px] pr-[70px] p-2 rounded-full text-white font-bold bg-gradient-to-b from-[#231c30] to-white/20 hover:scale-110 duration-300"><span> <i className='bx bx-cart-add text-white text-4xl'></i> </span>Checkout</button> */}
        
                        <PayPalButtonComponent totalBillUsd={totalBillUsd}paymentMethod = {paymentMethod}/>


                </div>

            </div>
        </div>
    );
}

export default MMRBoosting;