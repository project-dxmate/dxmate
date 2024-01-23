import { useEffect, useState } from "react";
import appLogo from '../styles/images/logo/3.png';
import startggLogo from '../styles/images/logo/2.png';

export const Login = () => {
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
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#303030',
                width: '500px',
                height: '400px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <img src={appLogo} style={{ width: '200px' }} />
                <p style={{ color: 'white', fontSize: '32px', fontWeight: 600, marginTop: '10px', marginBottom: '10px' }}>LOGIN</p>
                <p style={{ color: 'white', marginTop: 0 }}>Please log in with your start.gg account.</p>
                <button style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '300px',
                    border: '3px solid #fff',
                    borderRadius: '8px',
                    marginTop: '40px',
                    transition: '0.3s ease'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#a9a9a9';
                    e.currentTarget.style.borderColor = '#a9a9a9';
                }} 
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.borderColor = '#fff';
                }}
                >
                    <img src={startggLogo} style={{ width: '20px' }} />
                    <p style={{
                        color: '#1e1e1e',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        marginLeft: '10px',
                        fontSize: '16px',
                        marginTop: 5,
                        marginBottom: 5
                        }} >Sign in with start.gg</p>
                </button>

                <p style={{ color: 'white', marginBottom: 0 }} >Don't have an account? <a style={{ color: 'red' }} href="https://start.gg" target="_blank" >Register</a></p>
            </div>
        </div>
    )
}