import { useContext } from 'react';

import { ChallangesContext } from '../../contexts/ChallangesContext';

function CompletedChallengers() {

    const { challangesCompleted } = useContext(ChallangesContext);

    return (
        <div className="completed-challangers">
            <span>Desafios completos</span>
            <span>{ challangesCompleted }</span>
        </div>
    )
}

export default CompletedChallengers;