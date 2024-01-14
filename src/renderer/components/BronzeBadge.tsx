import bronzeRankLogo from '../styles/images/rank/bronze.png';

const tierPosition = {
    medium: {
        top: '79%',
        left: '50.5%'
    },
    small: {
        top: '79%',
        left: '50%'
    }
}

export const BronzeBadge = ({
    tier,
    size
}: {
    tier: 'IV' | 'III' | 'II' | 'I',
    size: 'medium' | 'small'
}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '150px',
            position: 'relative'
        }} >
            <img src={bronzeRankLogo} alt='Bronze Rank Logo' style={{
                width: size === 'medium' ? '150px' : '100px'
            }} />
            <p style={{
                position: 'absolute',
                top: size === 'medium' ? tierPosition.medium.top : tierPosition.small.top,
                left: size === 'medium' ? tierPosition.medium.left : tierPosition.small.left,
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: size === 'medium' ? '14px' : '10px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                textAlign: 'center'
            }} >{tier}</p>
        </div>
    )
}