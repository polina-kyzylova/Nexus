import styles from './EmailInput.module.css'


const EmailInput = ({onChange, text, validEmail}) => {
    function validation() {
        document.getElementById('input').style.border = 'solid #E65659 0.07vw';
        if (text) document.getElementById('email_prefix').style.borderLeft = 'solid #E65659 0.07vw';
        document.getElementById('label').style.color = '#E65659';
        return <p>Неверная почта</p>
    }


    return (
        <div className={styles.input_valid}>
            <div className={styles.input_box} id='input'>
                <input 
                    type="text"
                    id="email-input" 
                    onChange={onChange} 
                    onInput={() => {
                        document.getElementById('input').style.border = 'solid #75BDF8 0.07vw'
                        if (text) document.getElementById('email_prefix').style.borderLeft = 'solid #75BDF8 0.07vw'
                        document.getElementById('label').style.color = '#75BDF8';
                    }} 
                    required
                />
            
                {
                text ? <select name="email_prefix" id="email_prefix">
                        <option value="student">@std.tyuiu.ru</option>
                        <option value="staff">@tyuiu.ru</option>
                    </select> : null
                }

                <label id='label'>Корпоративная почта</label>
            </div>

            {validEmail ? null : validation()}
        </div>
    )
}


export default EmailInput;
