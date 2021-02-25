import { useEffect, useState, createContext, ReactNode, useContext } from 'react';

import { ChallangesContext } from './ChallangesContext';

interface CountDownProviderProps {
    children: ReactNode
}

interface CountDownContextData {
    minutes: number,
    seconds: number,
    isActive: boolean,
    hasFinish: boolean,
    startCountDown:() => void,
    resetCountDown:() => void
}

export const CountDownContext = createContext({} as CountDownContextData);

let tempo: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
    
    const { startNewChallange } = useContext(ChallangesContext);

    const [ time, setTime ] = useState(0.1 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinish, setHasFinish ] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(tempo);
        setIsActive(false);
        setHasFinish(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            tempo = setTimeout(() => {
                setTime(time - 1);
            },1000);
        }
        else if (isActive && time === 0) {
            setHasFinish(true);
            setIsActive(false);
            startNewChallange();
        }
    },[isActive, time]);
 
    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinish,
            startCountDown,
            resetCountDown
        }}>
            { children }
        </CountDownContext.Provider>
    )
}


