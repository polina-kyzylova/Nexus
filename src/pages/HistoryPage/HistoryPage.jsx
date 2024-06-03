import React from 'react';
import styles from './HistoryPage.module.css';
import HistoryItem from '../../modules/HistoryItem/HistoryItem';
import { Link } from 'react-router-dom';
import arrow from './arrow_back.png';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';


export default function HistoryPage() {
    const orders = useSelector(state => state.orders);
    const user = useSelector(state => state.user);

    const sortedItems = useMemo(
        () => orders.slice().sort(function(x, y) {
            if (x.Статус_Код > y.Статус_Код) {
                return 1;
              }
              if (x.Статус_Код < y.Статус_Код) {
                return -1;
              }
              return 0;
            }),
        [orders],
    );

    function generateOrders() {
        return sortedItems.map(order =>
            React.cloneElement(
                <HistoryItem
                    date={order.Дата_Заявки}
                    number={order.Номер_Заявки}
                    orderStatus={order.Статус}
                    fullName={order.Студент}
                    email={user.email}
                    phone={user.phone}
                    group={user.group}
                    purpose={order.Назначение}
                    format={order.Формат}
                    amount={order.Количество}
                />,
                { key: order.Номер_Заявки }
            ))
    }


    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Link className={styles.arrow} to="/">
                    <img src={arrow} alt='' />
                    <p>Назад</p>
                </Link>

                <h1>Заявки</h1>
            </div>

            {generateOrders()}
        </div>
    )
}
