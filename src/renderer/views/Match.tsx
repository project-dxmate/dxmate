import { useEffect, useState } from "react";

export const Match = () => {
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
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }} >
                <div style={{
                    width: '250px',
                    marginRight: '75px'
                }}>
                    <p style={{
                        color: 'white',
                        fontWeight: 600,
                        backgroundColor: '#ff0000'
                        }} >
                            RED TEAM
                    </p>
                    <div style={{
                        backgroundColor: '#303030',
                        border: '1px solid #fff',
                        borderLeft: '4px solid #ff0000',
                        marginBottom: '30px'
                    }} >
                        <p style={{ color: 'white' }} >RED_TEAM_1</p>
                        <p style={{ color: 'white' }} >12000 RP</p>
                        <p style={{ color: 'white' }} >#36</p>
                    </div>
                    <div style={{
                        backgroundColor: '#303030',
                        border: '1px solid #fff',
                        borderLeft: '4px solid #ff0000'
                    }} >
                        <p style={{ color: 'white' }} >RED_TEAM_2</p>
                        <p style={{ color: 'white' }} >12500 RP</p>
                        <p style={{ color: 'white' }} >#23</p>
                    </div>
                </div>
                <div style={{
                    width: '250px'
                }}>
                    <p style={{
                        color: 'white',
                        fontWeight: 600,
                        backgroundColor: '#1d63dc'
                        }} >
                            BLUE TEAM
                    </p>
                    <div style={{
                        backgroundColor: '#303030',
                        border: '1px solid #fff',
                        borderRight: '4px solid #1d63dc',
                        marginBottom: '30px'
                    }} >
                        <p style={{ color: 'white' }} >BLUE_TEAM_1</p>
                        <p style={{ color: 'white' }} >12000 RP</p>
                        <p style={{ color: 'white' }} >#36</p>
                    </div>
                    <div style={{
                        backgroundColor: '#303030',
                        border: '1px solid #fff',
                        borderRight: '4px solid #1d63dc'
                    }} >
                        <p style={{ color: 'white' }} >BLUE_TEAM_2</p>
                        <p style={{ color: 'white' }} >12500 RP</p>
                        <p style={{ color: 'white' }} >#23</p>
                    </div>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px'
            }} >
                <p style={{ color: 'white', marginBottom: 0 }} >Slippi Replay Path:</p>
                <p style={{ color: 'white', marginTop: '5px' }} >SLIPPI_REPLAY_PATH</p>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px'
            }} >
                <button style={{
                    color: 'white',
                    backgroundColor: '#f28749',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    border: '1px solid #f28749',
                    borderRadius: '8px',
                    fontSize: '16px',
                    width: '100px',
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
                    Exit
                </button>
            </div>

            <div style={{
                position: 'absolute',
                backgroundColor: '#303030',
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '8px',
                width: '250px'
            }} >
                <p style={{ color: 'white' }} >Connect Code: A5H978</p>
            </div>

            <div style={{
                position: 'absolute',
                backgroundColor: '#1e1e1e',
                top: '75%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '8px',
                width: '250px'
            }} >
                <p style={{ color: 'white' }} >Waiting for game...</p>
            </div>
        </div>
    )
}