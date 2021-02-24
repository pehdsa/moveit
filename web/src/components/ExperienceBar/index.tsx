import { useContext } from 'react';

import { ChallangesContext } from '../../contexts/ChallangesContext';

function ExperienceBar() {

    const { currentExp, expToNextLevel } = useContext(ChallangesContext);

    const porcentToNextLevel =  Math.round(currentExp * 100) / expToNextLevel;

    return (
        <header className="expirience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} />

                <span className="current-experience" style={{ left: `${porcentToNextLevel}%` }}>{ currentExp } xp</span>
            </div>
            <span>{ expToNextLevel } xp</span>
        </header>
    );
}

export default ExperienceBar;