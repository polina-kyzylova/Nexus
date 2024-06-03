import React from 'react';
import styles from './OrderDone.module.css';
import { useDispatch } from "react-redux";
import { updateOrderStatus } from '../../store/slices/ordersSlice';


export default function HistoryOrderDone({orderStatus, orderNumber}) {
  const dispatch = useDispatch();
  
  function confirmOrder() {
    dispatch(updateOrderStatus({
      Номер_Заявки: orderNumber,
      Статус: 'Получена',
      Статус_Код: 3,
    }));
  }

  return (
    <div className={styles.status} id='order_color'>
        <div className={styles.status_label} id='status_label'>
            <p id={styles.label}>{orderStatus}</p>
        </div>

        <div>
          <button id={styles.confirm} onClick={() => confirmOrder()}>Подтвердить получение</button>
          <button id={styles.repeat}>Повторить заявку</button>
        </div>
    </div>
  )
}
