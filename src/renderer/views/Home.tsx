import React, { useEffect, useState } from "react"
import { BronzeBadge } from "../components/BronzeBadge";

export const Home = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let rankBadge: React.ReactNode;

    rankBadge = <BronzeBadge tier='I' size='small' />
    
    return (
        <div style={{
            backgroundColor: '#1e1e1e',
            width: windowSize.width,
            height: windowSize.height
        }} >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }} >
                {rankBadge}
            </div>
        </div>
    )
}