import { useEffect, useState } from "react";
import applogo from '../styles/images/logo/4.png';
import { loadStartggCredentials } from "../../utils/loadStartggCredentials";

export const Loading = async ({ stage }: { stage: 'LAUNCH' }) => {
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

    if (stage === 'LAUNCH') {
        console.log('Starting app...');

        // start.ggの資格情報を取得する
        const startggCredentials = await loadStartggCredentials();
        console.log('Loaded start.gg credentials:', startggCredentials);

        // 資格情報がなければログインへ
        if (!startggCredentials) {
            console.log('No start.gg credentials found, so need to sign in.');

            return;
        }

        console.log('start.gg credentials found.');
    }

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