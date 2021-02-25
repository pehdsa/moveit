
import { useContext } from 'react';

import { ChallangesContext } from '../../contexts/ChallangesContext';

function Profiler() {

    const { level } = useContext(ChallangesContext);

    return (
        <div className="profile-container">
            <img src="https://github.com/pehdsa.png" alt="" />
            <div>
                <strong>Pedro Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level { level }
                </p>
            </div>
        </div>
    )
}

export default Profiler;