import styles from './OrderItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


const OrderItem = ({number, date, status}) => {
    function showStatus() {
        if (status === 'Новая') return (
            <span style={{backgroundColor: '#1670B7'}}>
                <Link to={'/history/#' + number} className={styles.link_order}>
                    В обработке
                </Link>
            </span>
        )

        if (status === 'Выполнена') return (
            <span style={{backgroundColor: '#46FF96'}}>
                <Link to={'/history/#' + number} className={styles.link_order}>
                    Готово
                </Link>
            </span>
        )
    }

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <h4>Заявка от {date}</h4>
                <p>№{number}</p>
            </div>

            {showStatus()}
        </div>
    )
}


export default OrderItem;

