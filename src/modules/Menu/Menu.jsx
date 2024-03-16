import Logo from '../../components/Logo/Logo'
import styles from './Menu.module.css'


const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.wrapper}>
                <Logo />

                <ul className={styles.items}>
                    <li>Главная</li>
                    <li>Курсы</li>
                    <li>Расписание</li>
                    <li>Оценки</li>
                    <li>Чаты</li>
                    <li>Документы</li>
                    <li>Настройки</li>
                </ul>
            </div>
        </div>
    )
}


export default Menu;