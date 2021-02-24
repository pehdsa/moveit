import { useState, useContext } from 'react';

import { ChallangesContext } from '../../contexts/ChallangesContext';

function ChallangeBox() {

    const { level, levelUp } = useContext(ChallangesContext);

    const [ hasActiveChallange, setHasActiveChallange ] = useState(true);

    return (
        <div className="challange-box-container">
            { hasActiveChallange ? (
                <div className="challange-active">
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>                    
                    <footer>
                        <button type="button" className="challange-fail-button">Falhei</button>
                        <button type="button" className="challange-succeeded-button">Completei</button>
                    </footer>
                </div>
            ) : (
                <div className="challange-not-active">
                    <strong>Finalize um ciclo para receber um desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios
                    </p>
                </div>
            ) }
        </div>
    );
}

export default ChallangeBox;