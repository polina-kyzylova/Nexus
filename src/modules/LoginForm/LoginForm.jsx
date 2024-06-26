import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { initAllOrders } from '../../store/slices/ordersSlice';
import { setOrdersLoaded } from "../../store/slices/serviceSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

import styles from './LoginForm.module.css'
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import EmailInput from '../../components/EmailInput/EmailInput';
import CheckBox from '../../components/CheckBox';



const Form = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);

    // manage email input
    const [text, setText] = useState(true); 
    const changeEmail = (e) => {
        setValidEmail(true)

        if (e.target.value.includes('@')) {
            setText(false);
            setEmail(e.target.value);
        }
        else {
            setText(true);
            setEmail(e.target.value + '@std.tyuiu.ru');
        }
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url = 'http://localhost/server/hs/nexus/getOrders/';

    // get user orders from 1C
    const getAllOrders = async (userUrl) => {
        try {
            const res = await fetch(userUrl) 
            const data = await res.json();
            dispatch(initAllOrders(data));
            dispatch(setOrdersLoaded({isOrdersLoaded: true}));
            console.log('data load from 1C is done')
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    // Firebase authentification 
    const handleLogin = (email, password) => {
        if (email && pass) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {

                    const dbRef = ref(getDatabase());
                    get(child(dbRef, `/students/${user.uid}/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        navigate('/');
                        const userData = snapshot.val();
                        
                        dispatch(setUser({
                            email: user.email,
                            id: user.uid,
                            card_id: userData.card_id,
                            token: user.accessToken,
                            name: userData.name,
                            last_name: userData.last_name,
                            surname: userData.surname,
                            group: userData.group,
                            phone: userData.phone,
                            edu_form: userData.edu_form,
                            enrolled: userData.enrolled,
                            accept_date: userData.accept_date,
                        }));

                        getAllOrders(url + userData.card_id); 
                    } else {
                        console.log("No data available");
                    }
                    }).catch((error) => {
                        console.error(error);
                    });
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-email') setValidEmail(false)
                    if (error.code === 'auth/missing-password' || error.code === 'auth/invalid-credential') setValidPass(false)
                })
        }
        if (!email) {setValidEmail(false)}
        if (!pass) {setValidPass(false)}
        if (!email && !pass) {
            setValidEmail(false); 
            setValidPass(false)
        }
    }
    


    return (
        <div className={styles.form}>
            <h2>Вход в Личный кабинет</h2>

            <div className={styles.section}>
                <EmailInput 
                    value={email}
                    onChange={changeEmail}
                    text={text}
                    validEmail={validEmail}
                />
                <PasswordInput 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    validPass={validPass}
                    setValidPass={setValidPass}
                />
                <CheckBox />
            </div>

            <div className={styles.section}>
                <button className={styles.enter_btn} onClick={() => handleLogin(email, pass)}>Войти</button>
                <button className={styles.reset_btn}>Не могу войти</button>
            </div>
        </div>
    )
}


export {Form}


