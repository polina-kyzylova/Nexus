import React from 'react'
import styles from './IDCardModal.module.css'
import IDCard from './ID_card.png'
import closeCard from './closeCard.png'


export default function IDCardModal({active, setActive}) {
    return (
        active ? 
        <div className={styles.modal} onClick={() => {setActive(false)}}>
            <div className={styles.modal_container} onClick={e => e.stopPropagation()}>
                <button className={styles.close} onClick={() => setActive(false)}>
                    <img src={closeCard} alt='' />
                </button>
                <img className={styles.card} src={IDCard} alt='' />
            </div>
        </div> : null
    )
}
