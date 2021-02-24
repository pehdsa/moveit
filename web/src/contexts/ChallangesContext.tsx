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
    expToNextLevel: number,
    levelUp:() => void,
    startNewChallange:() => void,
    resetChallange:() => void,
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangeProvider({ children }: ChallangesProviderProps) {
    const [ level, setLevel ] = useState(1);
    const [ currentExp, setCurrentExp ] = useState(0);
    const [ challangesCompleted, setChallangesCompleted ] = useState(0);
    
    const [ activeChallange, setActiveChallange ] = useState(null);

    const expToNextLevel = Math.pow((level + 1) * 4 ,2)

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challenge = challanges[randomChallangeIndex];
        setActiveChallange(challenge);
    }

    function resetChallange(){
        setActiveChallange(null);
    }
 
    return (
        <ChallangesContext.Provider value={{ 
            level, 
            currentExp, 
            challangesCompleted, 
            levelUp,
            startNewChallange,
            activeChallange,
            resetChallange,
            expToNextLevel
        }}>
            { children }
        </ChallangesContext.Provider>
    )
}


