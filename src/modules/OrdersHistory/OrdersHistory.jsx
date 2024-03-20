import BlueLabel from '../../components/BlueLabel'
import styles from './OrdersHistory.module.css'
import image from './orders_history.png'
import arrow from './arrow_gray.png'
import OrderItem from '../../components/OrderItem/OrderItem'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'


const OrdersHistory = () => {
    const orders = useSelector(state => state.orders);

    function generate(array) {
        return array.map((i) =>
        React.cloneElement(
            <OrderItem
                orderNumber={orders[i-1].orderNumber}
                orderDate={orders[i-1].orderDate}
                orderStatus={orders[i-1].status}
            />,
            { key: i }
        ));
    }
    
    function showOrders() {
        if (orders.length) {
            let ordersArray = [];

            if (orders.length < 3) {
                for (let i=orders.length; i >= 1; i--) ordersArray.push(i);
                return generate(ordersArray);
            }
            else {
                for (let i=orders.length; i > orders.length - 3; i--) ordersArray.push(i);
                return generate(ordersArray);
            }
        } else {
            return <p className={styles.noOrders}>Нет текущих заявок</p>
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

                {showOrders()}
            </div>
        </div>
    )
}

export default OrdersHistory;
