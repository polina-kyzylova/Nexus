import React, { useState } from "react";
import styles from './PasswordInput.module.css'
import eye from './eye.png'
import closeEye from './eye_close.png'


const PasswordInput = ({onChange, validPass, setValidPass}) => { 
    const [show, setShow] = useState(true);

    function defPass() {
        setValidPass(true);
        document.getElementById('pass_input').style.border = 'solid #75BDF8 0.07vw';
        document.getElementById('pass_label').style.color = '#75BDF8';
    }

    function validation() {
        document.getElementById('pass_input').style.border = 'solid #E65659 0.07vw';
        document.getElementById('pass_label').style.color = '#E65659';
        return <p>Неверный пароль</p>
    }


    return (
        <div className={styles.pass_box}>
            <div className={styles.input_box} id='pass_input'>
                <span className={styles.icon} id="password-icon">
                    {
                        show ?  <img id="show_password" alt='' onClick={() => setShow(false)} src={eye} /> :
                                <img id="hide_password" alt='' onClick={() => setShow(true)} src={closeEye} />
                    }
                </span>
                
                
                {show ? <input
                        type="password"
                        name="password-input"
                        onChange={onChange}
                        onInput={() => defPass()}
                        required /> :
                            <input 
                                type="text"
                                name="password-input"
                                onChange={onChange}
                                onInput={() => defPass()}
                                required />
                }
                
                <label id='pass_label'>Пароль</label>
            </div> 


            {validPass ? null : validation()}
        </div>
    )
}


export default PasswordInput;