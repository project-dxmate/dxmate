import { getPassword } from 'keytar';

const SERVICE = 'dxmate';
const ACCOUNT = {
    accessToken: 'access_token',
    refreshToken: 'refresh_token'
};

export const loadStartggCredentials = async () => {
    const accessToken = await getPassword(SERVICE, ACCOUNT.accessToken);
    const refreshToken = await getPassword(SERVICE, ACCOUNT.refreshToken);

    if (!accessToken || !refreshToken) {
        return null;
    }

    return { accessToken, refreshToken };
}