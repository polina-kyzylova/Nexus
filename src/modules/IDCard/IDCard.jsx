import styles from './IDCard.module.css'
import photo from './student.png'
import BlueLabel from '../../components/BlueLabel'
import open from './openCard.png'
import IDCardModal from '../IDCardModal/IDCardModal'
import { useState } from 'react'


const IDCard = () => {
    const [openIDCard, setOpenIDCard] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.header_labels}>
                    <BlueLabel label='Студенческий билет'/>
                    <p>№11-11-123456</p>
                </div>

                <button onClick={() => setOpenIDCard(true)}>
                    <img src={open} alt='' />
                </button>
            </div>


            <div className={styles.card_body}>
                <img alt='' src={photo}/>

                <ul className={styles.label_items}>
                    <li>Фамилия</li>
                    <li>Имя, отчество</li>
                    <li>Форма обучения</li>
                    <li>Зачислен приказом</li>
                    <li>Дата выдачи</li>
                </ul>

                <ul className={styles.value_items}>
                    <li className={styles.impt}>Иванов</li>
                    <li className={styles.impt}>Иван Иванович</li>
                    <li>Очная</li>
                    <li>1111 о/п 24.08.2022 г.</li>
                    <li>01 сентября 2022 г.</li>
                </ul>
            </div>


            <IDCardModal active={openIDCard} setActive={setOpenIDCard}/>
        </div>
    )
}

export default IDCard;