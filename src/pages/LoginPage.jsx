import { Form } from '../modules/LoginForm/LoginForm'
import Logo from '../components/Logo/Logo'


const LoginPage = () => {
    const styles = {
        width: '92%',
        height: '75%',
        display: 'grid',
        gridTemplateColumns: 'auto 30%',
        gridColumnGap: '5%',
        alignItems: 'center',
    }

    return (
        <div style={styles}>
            <Form />
            <Logo />
        </div>
    );
}


export default LoginPage;
