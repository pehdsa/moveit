import { useContext } from 'react';

import { ChallangesContext } from '../../contexts/ChallangesContext';

function ChallangeBox() {

    const { activeChallange, resetChallange } = useContext(ChallangesContext);

    return (
        <div className="challange-box-container">
            { activeChallange ? (
                <div className="challange-active">
                    <header>Ganhe { activeChallange.amount } xp</header>
                    <main>
                        <img src={`icons/${ activeChallange.type }.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallange.description }</p>
                    </main>                    
                    <footer>
                        <button type="button" onClick={ resetChallange } className="challange-fail-button">Falhei</button>
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