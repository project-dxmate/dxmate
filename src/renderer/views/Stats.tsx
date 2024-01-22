import { useEffect, useState } from "react";

export const Stats = () => {
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
                display: 'flex',
                flexDirection: 'row'
            }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }} >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }} >
                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Kills</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >128</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Damage Done</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >58312</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Wins</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >56</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '50px'
                    }} >
                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px', fontSize: '12px' }} >Opening Conversion Rate</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >72%</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Openings Per Kill</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >4.2</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px', fontSize: '12px' }} >Damage Per Opening</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >24.9</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '50px'
                    }} >
                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Rolls Per Game</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >2.3</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Air Dodge Per Game</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >1.7</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px', fontSize: '12px' }} >Spot Dodge Per Game</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >2.5</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '50px'
                    }} >
                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Neutral Wins</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >10.2</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Counter Hits</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >2.1</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Benefical Trades</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >2.3</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '50px'
                    }} >
                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px' }} >Inputs Per Minute</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >525.4</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px', fontSize: '12px' }} >Digital Inputs Per Minute</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >183.1</p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            width: '200px',
                            height: '100px',
                            borderRadius: '16px',
                            marginLeft: '20px'
                        }} >
                            <p style={{ color: '#1e1e1e', fontWeight: 600, display: 'flex', justifyContent: 'flex-start', marginBottom: 0, marginLeft: '15px', fontSize: '12px' }} >L-Cancel Success Rate</p>
                            <p style={{ color: '#1e1e1e', fontWeight: 600, fontSize: '24px', marginTop: '10px' }} >95 %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}