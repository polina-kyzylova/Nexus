import styles from './IDCard.module.css'
import photo from './student.png'
import BlueLabel from '../../components/BlueLabel'
import open from './openCard.png'
import IDCardModal from '../IDCardModal/IDCardModal'
import { useState } from 'react';
import { useSelector } from "react-redux";


const IDCard = () => {
    const [openIDCard, setOpenIDCard] = useState(false);
    const user = useSelector(state => state.user);


    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.header_labels}>
                    <BlueLabel label='Студенческий билет'/>
                    <p>№{user.id}</p>
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
                    <li className={styles.impt}>{user.surname}</li>
                    <li className={styles.impt}>{user.name} {user.last_name}</li>
                    <li>{user.eduForm}</li>
                    <li>{user.enrolled}</li>
                    <li>{user.acceptDate}</li>
                </ul>
            </div>


            <IDCardModal active={openIDCard} setActive={setOpenIDCard}/>
        </div>
    )
}

export default IDCard;