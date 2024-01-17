import { useEffect, useState } from "react";
import applogo from '../styles/images/logo/4.png';

export const Loading = () => {
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
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }} >
                <img src={applogo} style={{
                    width: '30px'
                }} />
                <p style={{ color:'white', fontSize: '24px', marginLeft: '8px' }} >Loading...</p>
            </div>
        </div>
    )
}