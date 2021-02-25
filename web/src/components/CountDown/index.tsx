import { useContext } from "react";

import { CountDownContext } from '../../contexts/CountDownContext';

function CountDown() {    

    const { 
        minutes, 
        seconds, 
        hasFinish, 
        isActive, 
        resetCountDown, 
        startCountDown
    } = useContext(CountDownContext);

    const [ minuteLeft, minutoRight ] = String(minutes).padStart(2,'0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2,'0').split('');    

    return (
        <div>
            <div className="count-down-container">

                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minutoRight }</span>
                </div>
                
                <span>:</span>
                
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>

            </div>

            { hasFinish ? (                
                <button disabled={ true } className="count-down-button">Ciclo Encerrado</button>
            ) : (
                <>
                { isActive ? (
                    <button type="button" onClick={ resetCountDown } className="count-down-button active">Abandonar ciclo</button>
                ) : (
                    <button type="button" onClick={ startCountDown } className="count-down-button">Iniciar um ciclo </button>
                ) }       
                </>
            ) }                

        </div>
    )
}

export default CountDown;