import styles from './OrderItem.module.css'


const OrderItem = ({orderNumber, orderDate, orderStatus}) => {
    const status = {
        backgroundColor: '#42515D',
    }

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <h4>Заявка от {orderDate}</h4>
                <p>№{orderNumber}</p>
            </div>

            <span style={status}>{orderStatus}</span>
        </div>
    )
}


export default OrderItem;


/*
background-color: #42515D; gray
background-color: #46FF96; green
background-color: #1670B7; blue
 */