import { useState, useEffect } from "react";

let tempo: NodeJS.Timeout;

function CountDown() {

    const [ time, setTime ] = useState(0.1 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinish, setHasFinish ] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft, minutoRight ] = String(minutes).padStart(2,'0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2,'0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(tempo);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            tempo = setTimeout(() => {
                setTime(time - 1);
            },1000);
        }
        else if (isActive && time === 0) {
            setHasFinish(true);
            setIsActive(false);
        }
    },[isActive, time]);

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