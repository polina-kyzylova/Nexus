import BlueLabel from '../../components/BlueLabel';
import styles from './CreatingOrders.module.css';
import OrderModal from '../OrderModal/OrderModal';
import { useState } from "react";


const CreatingOrders = () => {
    const [modalActive, setModalActive] = useState(false);
    const btn = {
        backgroundColor: '#04375F',
        color: '#75BDF8',
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <BlueLabel label='Подать заявку'/>

                <div className={styles.items}>
                    <button onClick={() => setModalActive('Справка с места обучения')}>Справка с места обучения</button>
                    <button onClick={() => setModalActive('Справка об успеваемости')}>Справка об успеваемости</button>
                    <button onClick={() => setModalActive('Повышенная стипендия')}>Повышенная стипендия</button>
                    <button onClick={() => setModalActive('Перевод на бюджетное место')}>Перевод на бюджетное место</button>
                    <button onClick={() => setModalActive('Перевод на другое направление')}>Перевод на другое направление</button>
                    <button onClick={() => setModalActive('Задолженность')}>Задолженность</button>
                    <button onClick={() => setModalActive('Академический отпуск')}>Академический отпуск</button>
                    <button onClick={() => setModalActive('Отчисление')}>Отчисление</button>
                    <button style={btn} onClick={() => setModalActive('Иное обращение')}>Иное обращение</button>
                </div>
            </div>

            <OrderModal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default CreatingOrders;



