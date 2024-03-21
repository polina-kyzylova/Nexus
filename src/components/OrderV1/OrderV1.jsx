import React, { useState } from "react";
import styles from './OrderV1.module.css'
import image from '../success_orded.png';
import currentDate from "../../hooks/currentDate";
import OrderTemplate from '../OrderTemplate';
import { useDispatch, useSelector } from "react-redux";
import { addOrderV1 } from '../../store/slices/ordersSlice';



const OrderV1 = ({active, setActive}) => {
    const [format, setFormat] = useState('Электронный');
    const [amount, setAmount] = useState(1);
    const [purpose, setPurpose] = useState('');
    const [order, setOrder] = useState(true);
    const [valid, setValid] = useState(false);
    const [serverOrderNumber, setServerOrderNumber] = useState();

    const user = useSelector(state => state.user);
    const url = useSelector(state => state.service.urlV1);
    const dispatch = useDispatch();
    const [ans, setAns] = React.useState();


    const getAnswer = async () => {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "IDСтудента": user.id,
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
      const data = await res.json();
      setAns(data);
    };
  
    React.useEffect(() => {
      getAnswer();
    }, []);

    function sentOrder() {
        if (format !== '' && purpose !== '') {
            setServerOrderNumber(ans.Номер);

            dispatch(addOrderV1({
                orderNumber: ans.Номер,
                orderDate: currentDate(),
                status: 'В обработке',
                orderPurpose: active,
                orderReason: purpose,
                docFormat: format,
                docAmount: amount,
            }));

            setValid(false);
            setOrder(false);
        } else {
            setValid(true)
            document.getElementById('purpose_textarea').style.border = '2px solid #E65659'
        }
    }



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

        <div className={styles.success}>
            <h2>Заявка <span>№{serverOrderNumber}</span> отправлена!</h2>
            <img src={image} alt=''/>
            <p>Срок исполнения: 3 рабочих дня (вы получите уведомление)</p>
            <button className={styles.success_btn} onClick={() => {setActive(false); setOrder(true)}}>Ок</button>
        </div> 
    )
}


export default OrderV1;