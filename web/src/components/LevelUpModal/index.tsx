
interface LevelUpModalProps {
    isOpen: boolean,
    level: number,
    callBackClose:() => void
}

export function LevelUpModal(props: LevelUpModalProps) {

    return (
        <div className={`level-up-modal${ props.isOpen ? ' show' : '' }`}>
            <div className="level-up-modal-container">

                <header>{ props.level }</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={ props.callBackClose }>
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>

            </div>
        </div>
    )
}

export default LevelUpModal;