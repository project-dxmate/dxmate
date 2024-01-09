import React, { useEffect, useState } from "react"
import bronzeRankLogo from '../styles/images/rank/bronze.png'
import silverRankLogo from '../styles/images/rank/silver.png'
import goldRankLogo from '../styles/images/rank/gold.png'
import platinumRankLogo from '../styles/images/rank/platinum.png'
import diamondRankLogo from '../styles/images/rank/diamond.png'
import masterRankLogo from '../styles/images/rank/master.png'
import grandmasterRankLogo from '../styles/images/rank/grandmaster.png'
import dxmate20xxRankLogo from '../styles/images/rank/dxmate20xx.png'

export const Home = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [rankPoints, setRankPoints] = useState(0);

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    let rankLogo;

    if (rankPoints >= 5000) {
        rankLogo = diamondRankLogo;
    } else {
        rankLogo = bronzeRankLogo;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
        style={{
            backgroundColor: '#1e1e1e',
            width: windowSize.width,
            height: windowSize.height
        }}
        >
            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <button 
                style={{
                    backgroundColor: '#1e1e1e',
                    border: '3px solid #1e1e1e',
                    borderRadius: '8px'
                }}
                >
                    <img src={rankLogo} alt="Rank Logo Image" />
                </button>
            </div>
            
        </div>
    )
}