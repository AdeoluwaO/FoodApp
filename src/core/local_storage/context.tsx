import {createContext} from 'react';

export const userToken = createContext<string | undefined>(undefined);

type Props = {
    children: React.ReactNode,
    token: string | undefined
}

function Provider({children, token}: Props) {
    <userToken.Provider value={token}>
        {children}
    </userToken.Provider>
}