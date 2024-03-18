import React from 'react';
import styles from './OrderDone.module.css';


export default function HistoryOrderDone({orderStatus}) {
  return (
    <div className={styles.status} id='order_color'>
        <div className={styles.status_label} id='status_label'>
            <p id={styles.label}>{orderStatus}</p>
        </div>

        <div>
          <p id={styles.confirm}>Подтвердить получение</p>
          <p id={styles.repeat}>Повторить заявку</p>
        </div>
    </div>
  )
}
