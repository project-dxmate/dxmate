import React, { useEffect, useState } from "react"
import appLogo from '../styles/images/logo/0.png'
import slippiLogo from '../styles/images/logo/1.png'
import startggLogo from '../styles/images/logo/2.png'

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
                    fontSize: '22px',
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
                    borderRadius: '8px',
                    transition: '0.3s ease'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#9a562e';
                    e.currentTarget.style.borderColor = '#9a562e';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f28749';
                    e.currentTarget.style.borderColor = '#f28749';
                  }} 
                >
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
            <div style={{
                position: 'absolute',
                right: '20px',
                top: '20px'
            }} >
                <div style={{ display: 'flex', flexDirection: 'row'}} >
                <button style={{
                        width: '150px',
                        backgroundColor: '#1e1e1e',
                        border: '3px solid #1e1e1e',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.3s ease',
                        fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333' }
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1e1e1e' }
                    >
                        <img style={{
                            width: '20px'
                        }} src={startggLogo} />
                        <p style={{ color: 'white', marginLeft: '8px' }} >Destiny</p>
                    </button>

                    <button style={{
                        width: '150px',
                        backgroundColor: '#1e1e1e',
                        border: '3px solid #1e1e1e',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.3s ease',
                        fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333' }
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1e1e1e' }
                    >
                        <img style={{
                            width: '30px'
                        }} src={slippiLogo} />
                        <p style={{ color: 'white', marginLeft: '8px' }} >ABC#123</p>
                    </button>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                left: '20px',
                bottom: '20px'
            }} >
                <p style={{ color: 'white', marginBottom: 0 }}>EAST ASIA</p>
                <p style={{ color: 'white', marginTop: '5px' }}>🟢 30</p>
            </div>
        </div>
    )
}