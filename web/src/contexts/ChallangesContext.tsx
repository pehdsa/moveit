import React, { useEffect, useState, createContext, ReactNode } from 'react';
import Cookie from 'js-cookie';
import challanges from '../../challenges.json';

import LevelUpModal from '../components/LevelUpModal';

interface ChallangesProviderProps {
    level: number,
    currentExp: number,
    challangesCompleted: number,
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
    isLevelUpModalOpen: boolean,
    levelUp:() => void,
    startNewChallange:() => void,
    resetChallange:() => void,
    completeChallange:() => void
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangeProvider(props : ChallangesProviderProps) {
    const [ level, setLevel ] = useState(props.level ?? 1);
    const [ currentExp, setCurrentExp ] = useState(props.currentExp ?? 0);
    const [ challangesCompleted, setChallangesCompleted ] = useState(props.challangesCompleted ?? 0);
    
    const [ activeChallange, setActiveChallange ] = useState(null);
    const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false);

    const expToNextLevel = Math.pow((level + 1) * 4 ,2)

    useEffect(() => {
        Notification.requestPermission();
    },[]);

    useEffect(() => {
        Cookie.set('level', String(level));
        Cookie.set('currentExp', String(currentExp));
        Cookie.set('challangesCompleted', String(challangesCompleted));
    },[level, currentExp, challangesCompleted])

    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challenge = challanges[randomChallangeIndex];
        
        setActiveChallange(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {      
                icon: '/favicon.png',
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
            isLevelUpModalOpen,
            completeChallange
        }}>
            
            <React.Fragment>
                { props.children } 
                <LevelUpModal 
                    isOpen={ isLevelUpModalOpen }
                    level={ level }
                    callBackClose={() => setIsLevelUpModalOpen(false)}
                />
            </React.Fragment>

        </ChallangesContext.Provider>
    )
}


