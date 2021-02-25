import { useEffect, useState, createContext, ReactNode } from 'react';
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
    completeChallange:() => void
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangeProvider({ children }: ChallangesProviderProps) {
    const [ level, setLevel ] = useState(1);
    const [ currentExp, setCurrentExp ] = useState(0);
    const [ challangesCompleted, setChallangesCompleted ] = useState(0);
    
    const [ activeChallange, setActiveChallange ] = useState(null);

    const expToNextLevel = Math.pow((level + 1) * 4 ,2)

    useEffect(() => {
        Notification.requestPermission();
    },[]);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challenge = challanges[randomChallangeIndex];
        
        setActiveChallange(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {                
                body: `Valendo ${ challenge.amount }xp`
            })
        }

    }

    function resetChallange(){
        setActiveChallange(null);
    }

    function completeChallange() {
        if(!activeChallange) {
            return;
        }

        const { amount } = activeChallange;
        let finalExperience = currentExp + amount;

        if (finalExperience >= expToNextLevel) {
            finalExperience = finalExperience - expToNextLevel;
            levelUp();
        }

        setCurrentExp(finalExperience);
        setActiveChallange(null);
        setChallangesCompleted(challangesCompleted + 1);

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
            expToNextLevel,
            completeChallange
        }}>
            { children }
        </ChallangesContext.Provider>
    )
}


