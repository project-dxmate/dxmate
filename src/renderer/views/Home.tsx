import React, { useEffect, useState } from "react"
import appLogo from '../styles/images/logo/0.png'

// 変動するパラメータ: tier

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
    
    return (
        <div style={{
            backgroundColor: '#1e1e1e',
            width: windowSize.width,
            height: windowSize.height,
            fontFamily: 'Poppins, sans-serif'
        }} >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }} >
                <p style={{
                    color: 'orange',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: 0
                }}>#8</p>
                <p style={{
                    color: 'white',
                    fontSize: '24px',
                    marginTop: 0
                }} >86032 RP</p>
                <button style={{
                    width: '150px',
                    height: '40px',
                    backgroundColor: '#f28749',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: '3px solid #f28749',
                    borderRadius: '8px'
                }} >
                    READY
                </button>
            </div>
            <div style={{
                position: 'absolute',
                left: '20px',
                top: '20px'
            }} >
                <img style={{ width: '150px' }} src={appLogo} />
                <p style={{
                    color: 'white',
                    marginTop: 0,
                    fontWeight: 600
                }}>SEASON 1</p>
            </div>
        </div>
    )
}