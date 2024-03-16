import BlueLabel from '../../components/BlueLabel'
import styles from './CreatingOrders.module.css'
import OrderModal from '../OrderModal/OrderModal';
import { useState } from "react";



const CreatingOrders = () => {
    const btn = {
        backgroundColor: '#04375F',
        color: '#75BDF8',
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <BlueLabel label='Подать заявку'/>

                <div className={styles.items}>
                    <button onClick={() => setModalActive('Справка с места учебы')}>Справка с места учебы</button>
                    <button onClick={() => setModalActive('Табель успеваемости')}>Табель успеваемости</button>
                    <button onClick={() => setModalActive('Повышенная стипендия')}>Повышенная стипендия</button>
                    <button onClick={() => setModalActive('Перевод на бюджетное место')}>Перевод на бюджетное место</button>
                    <button onClick={() => setModalActive('Перевод на другое направление')}>Перевод на другое направление</button>
                    <button onClick={() => setModalActive('Задолженность')}>Задолженность</button>
                    <button onClick={() => setModalActive('Академический отпуск')}>Академический отпуск</button>
                    <button onClick={() => setModalActive('Отчисление')}>Отчисление</button>
                    <button style={btn} onClick={() => setModalActive('Иное обращение')}>Иное обращение</button>
                </div>
            </div>

            <OrderModal 
                active={modalActive}
                setActive={setModalActive}
                orderNumber='11111111111'
            />
        </div>
    )
}


export default CreatingOrders;