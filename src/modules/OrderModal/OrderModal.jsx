import styles from './OrderModal.module.css'
import React, { useState } from "react";
import OrderV1 from '../../components/OrderV1/OrderV1';
import OrderV2 from '../../components/OrderV2/OrderV2';
import OrderV3 from '../../components/OrderV3/OrderV3';
import OrderV4 from '../../components/OrderV4/OrderV4';
import OrderV5 from '../../components/OrderV5/OrderV5';
import OrderV5_test from '../../components/OrderV5_test/OrderV5'



const OrderModal = ({active, setActive, orderNumber}) => {
    const [order, setOrder] = useState(true)

    function orderVariant(act) {
        if (act === 'Справка с места учебы' || act === 'Табель успеваемости') {
            return (
                <OrderV1
                active={active}
                setActive={setActive}
                orderNumber={orderNumber}
                />)}
        else if (act === 'Перевод на бюджетное место' || 
                 act === 'Перевод на другое направление' ||
                 act === 'Академический отпуск' ||
                 act === 'Отчисление') {
            return (
                <OrderV2
                active={active}
                setActive={setActive}
                orderNumber={orderNumber}
                />)}
        else if (act === 'Повышенная стипендия') {
            return (<OrderV3 
                active={active}
                setActive={setActive}
                orderNumber={orderNumber}
                />)
        }
        else if (act === 'Задолженность') {
            return (<OrderV4
                active={active}
                setActive={setActive}
                orderNumber={orderNumber}
            />)
        }
        else {
            return (<OrderV5_test 
                active={active}
                setActive={setActive}
                orderNumber={orderNumber}
            />)
        }
    }

    return (
        active ? 
        <div className={styles.modal} onClick={() => {setActive(false); setOrder(true)}}>
            <div className={styles.modal_container} onClick={e => e.stopPropagation()}>
                {orderVariant(active)}
            </div>
        </div> : null
    )
}


export default OrderModal;



/*
                {order ? <NewOrder
                    active={active}
                    setActive={setActive}
                    setOrder={setOrder}
                /> : 
                <div className={styles.modal_body}>
                    <h2>Заявка <span>№{orderNumber}</span> отправлена!</h2>
                    <img src={image} alt=''/>

                    <div className={styles.order_info}>
                        <ul className={styles.template}>
                            <li>Срок исполнения:</li>
                            <li>Место получения:</li>
                            <li>Методист:</li>
                            <li>Часы работы:</li>
                        </ul>
                        <ul>
                            <li>3 рабочих дня (вы получите уведомление о готовности)</li>
                            <li>Территориальный отдел №1, корпус 7, кабинет 206</li>
                            <li>Петрова Александра Сергеевна</li>
                            <li>09:00-12:00, 13:00-17:00</li>
                        </ul>
                    </div>

                    <button className={styles.cancel_btn} onClick={() => {setActive(false); setOrder(true)}}>Ок</button>
                </div>
                }
*/