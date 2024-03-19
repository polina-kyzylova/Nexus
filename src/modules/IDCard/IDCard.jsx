import styles from './IDCard.module.css'
import photo from './student.png'
import BlueLabel from '../../components/BlueLabel'
import open from './openCard.png'
import IDCardModal from '../IDCardModal/IDCardModal'
import { useState } from 'react';
import { useSelector } from "react-redux";


const IDCard = () => {
    const [openIDCard, setOpenIDCard] = useState(false);
    const userID = useSelector(state => state.user.id);
    const name = useSelector(state => state.user.name);
    const surname = useSelector(state => state.user.surname);
    const lastName = useSelector(state => state.user.last_name);


    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.header_labels}>
                    <BlueLabel label='Студенческий билет'/>
                    <p>№{userID}</p>
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
                    <li className={styles.impt}>{surname}</li>
                    <li className={styles.impt}>{name} {lastName}</li>
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