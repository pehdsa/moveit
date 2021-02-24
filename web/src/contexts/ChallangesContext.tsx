import { useState, createContext, ReactNode } from 'react';
import challanges from '../../challenges.json';

interface ChallangesProviderProps {
    children: ReactNode
}

interface Challange {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallangesContextData {
    level: number,
    currentExp: number,
    challangesCompleted: number,
    activeChallange: Challange,
    levelUp:() => void,
    startNewChallange:() => void
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangeProvider({ children }: ChallangesProviderProps) {
    const [ level, setLevel ] = useState(1);
    const [ currentExp, setCurrentExp ] = useState(0);
    const [ challangesCompleted, setChallangesCompleted ] = useState(null);
    
    const [ activeChallange, setActiveChallange ] = useState({});

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challenge = challanges[randomChallangeIndex];
        setActiveChallange(challenge);
    }

    return (
        <ChallangesContext.Provider value={{ 
            level, 
            currentExp, 
            challangesCompleted, 
            levelUp,
            startNewChallange,
            activeChallange
        }}>
            { children }
        </ChallangesContext.Provider>
    )
}


