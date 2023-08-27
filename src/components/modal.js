import React from 'react'

const BACKGROUD_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: 'black'
}

export default function modal({ isOpen, setModalOpen, children }) {

    if (isOpen) {
        return (
            <div style={BACKGROUD_STYLE}>
                <div style={MODAL_STYLE}>{children}
                    <div>
                        <button style={{ cursor: 'pointer' }} onClick={setModalOpen}>Fechar</button>
                    </div>

                </div>
            </div>

        )
    }

    return null

}
