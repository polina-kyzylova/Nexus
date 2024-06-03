import BlueLabel from '../../components/BlueLabel'
import styles from './OrdersHistory.module.css'
import image from './orders_history.png'
import arrow from './arrow_gray.png'
import OrderItem from '../../components/OrderItem/OrderItem'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import CircularProgress from '@mui/material/CircularProgress';



const OrdersHistory = () => {
    const isLoading = useSelector(state => state.service.isOrdersLoaded);
    const orders = useSelector(state => state.orders);
    
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

    function generate(array) {
        return array.map(order =>
        React.cloneElement(
            <OrderItem
                number={order.Номер_Заявки}
                date={order.Дата_Заявки}
                status={order.Статус}
            />,
            { key: order.Номер_Заявки }
        ));
    }


    function showOrders() {
        if (!orders.length) return <p className={styles.noOrders}>Нет текущих заявок</p>
        else {
            const items = sortedItems.filter(i => {
                if (i.Статус !== 'Получена') return i;
                else return false;
            }); 

            let border = items.length;
            let result = [];

            if (items.length >= 3) result = items.slice(0, 3);
            else result = items.slice(0, border);
                
            if (result.length) return generate(result);
            else return <p className={styles.noOrders}>Нет текущих заявок</p>
        }
    }


    return (
        <div className={styles.orders}>
            <div className={styles.content}>
                <div className={styles.orders_header}>
                    <img className={styles.image} src={image} alt=''/>
                    <BlueLabel label='История заявок'/>

                    <Link className={styles.arrow} to="/history">
                        <img src={arrow} alt='' />
                    </Link>
                </div>

                {isLoading ? showOrders() : <CircularProgress className={styles.noOrders} size='3vw' color="primary" />}
            </div>
        </div>
    )
}

export default OrdersHistory;