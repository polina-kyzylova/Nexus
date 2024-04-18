import Logo from '../../components/Logo/Logo';
import './Menu.css';


const Menu = () => {
    return (
        <div className='menu'>
            <div className='wrapper'>
                <Logo />

                <div className='items'>
                    <span></span>
                    <span><p>Главная</p></span>
                    <span><p>Курсы</p></span>
                    <span><p>Расписание</p></span>
                    <span><p>Оценки</p></span>
                    <span className='previous'><p>Чаты</p></span>
                    <span className='focused'><p>Документы</p></span>
                    <span className='next'><p>События</p></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}


export default Menu;