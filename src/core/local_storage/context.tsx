import { createContext, useState } from 'react';

type StoreDeviceToken = {
    token: string | undefined,
    getToken: (token: string) => void
}
export const userToken = createContext<StoreDeviceToken>({
    token: undefined,
    getToken(token) { },
});

type Props = {
    children: React.ReactNode,
}
function Provider({ children }: Props) {
    const [storeToken, setStoreToken] = useState<string>();
    function getToken(token: string) {
        setStoreToken(token);
    }
    <userToken.Provider value={{
        token: storeToken,
        getToken
    }}>
        {children}
    </userToken.Provider>
}
export default Provider;