import { createContext, useState } from 'react';

const GuessContext = createContext();

export function GuessProvider( {children }) {


    
    return (
        <GuessContext.Provider value={context}>
            {children}
        </GuessContext.Provider>
    );
}

export default GuessContext;