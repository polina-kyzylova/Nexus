import React, { useState } from "react";
import styles from './OrderV1.module.css'
import success_order from '../success_order.png';
import fail_order from '../fail_order.png';
import currentDate from "../../hooks/currentDate";
import OrderTemplate from '../OrderTemplate';
import { useDispatch, useSelector } from "react-redux";
import { addOrderV1 } from '../../store/slices/ordersSlice';
import CircularProgress from '@mui/material/CircularProgress';



const OrderV1 = ({active, setActive}) => {
    const [format, setFormat] = useState('Электронный');
    const [amount, setAmount] = useState(1);
    const [purpose, setPurpose] = useState('');
    const [order, setOrder] = useState(true);
    const [valid, setValid] = useState(false);
    const [serverOrderNumber, setServerOrderNumber] = useState();

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const url = 'http://localhost/server/hs/nexus/neworderV1';


    // sent order to 1C
    const getAnswer = () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "IDСтудента": user.card_id,
                "Назначение": active,
                "ЦельПолучения": purpose,
                "ФИО": `${user.surname} ${user.name} ${user.last_name}`,
                "Количество": amount,
                "Формат": format,
                "Группа": user.group,
                "Почта": user.email,
                "Телефон": user.phone
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw response;
        })
        .then(data => {
            setServerOrderNumber(data.Номер);
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
            setError(error);
        })
    };

    function sentOrder() {
        if (format !== '' && purpose !== '') {
            getAnswer();
            setValid(false);
            setOrder(false);
        } else {
            setValid(true)
            document.getElementById('purpose_textarea').style.border = '2px solid #E65659'
        }
    }

    function showOrderResult() {
        if (serverOrderNumber) {
            dispatch(addOrderV1({
                Номер_Заявки: serverOrderNumber,
                Дата_Заявки: currentDate(),
                Статус: 'Новая',
                Назначение: active,
                Причина: purpose,
                Формат: format,
                Количество: amount,
            }));

            return (
                <div className={styles.success}>
                    <h2>Заявка <span>№{serverOrderNumber}</span> отправлена!</h2>
                    <img src={success_order} alt=''/>
                    <p>Срок исполнения: 3 рабочих дня (вы получите уведомление)</p>
                    <button className={styles.success_btn} onClick={() => {setActive(false); setOrder(true)}}>Ок</button>
                </div> 
            )
        } else {
            return <CircularProgress size='5vw' color="success" />
        }
    }


    // order form validation 
    const MinAmount = () => {
        if (amount > 1) setAmount(amount - 1);
        else setAmount(1);
    }

    function ValidText() {
        if (purpose === '') {
            setValid(true)
            document.getElementById('purpose_textarea').style.border = '2px solid #E65659'
        }
        else {
            setValid(false)
            document.getElementById('purpose_textarea').style.border = 'none'
        } 
    }

    function ChangeFormat() {
        if (format !== 'Электронный') {
            return (
                <div className={styles.order_amount}>
                    <p>Количество экземпляров:</p>

                    <div className={styles.amount_content}>
                        <button onClick={() => MinAmount()}>-</button>
                        <input disabled value={amount}/>
                        <button onClick={() => setAmount(amount + 1)}>+</button>
                    </div>
                </div> 
            )}
        else return (null)
    }



    return (
        order ?
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.data}>Заявка от {currentDate()}</h4>
            </div>


            <div className={styles.body}>
                <OrderTemplate active={active} />

                <div className={styles.order}>
                    <div className={styles.order_purpose}>
                        <p>Цель получения:</p>

                        <div className={styles.purpose_content}>
                            <textarea 
                                name='purpose_textarea'
                                id = 'purpose_textarea'
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value)}
                                onBlur={() => ValidText()}
                                onFocus={() => {setValid(false)
                                    document.getElementById('purpose_textarea').style.border = 'none'}}>
                            </textarea>
                            {valid ? <h5>Заполните поле</h5> : null}
                        </div>
                    </div>

                    <div className={styles.order_format}>
                        <p>Формат документа:</p>

                        <select 
                            name="doc_format"
                            id="doc-format"
                            value={format}
                            onChange={(e) => setFormat(e.target.value)}>
                                <option value='Электронный'>Электронный</option>
                                <option value='Бумажный'>Бумажный</option>
                        </select>
                    </div>

                    {ChangeFormat()}
                </div>
            </div>


            <div className={styles.footer}>
                <button className={styles.cancel_btn} onClick={() => setActive(false)}>Отмена</button>
                <button className={styles.sent_btn} onClick={() => sentOrder()}>Отправить</button>
            </div>
        </div> :

        error ? 
        <div className={styles.server_err}>
            <img src={fail_order} alt="" />
            <p>Ошибка сервера :(<br /> Попробуйте позже</p> 
            <button className={styles.cancel_btn} onClick={() => setActive(false)}>Ок</button>
        </div>
        : showOrderResult()
    )
}


export default OrderV1;
