import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/use-auth';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

import SideMenu from '../modules/Menu/Menu'
import styles from './HomePage.module.css'
import IDCard from '../modules/IDCard/IDCard'
import OrdersHistory from "../modules/OrdersHistory/OrdersHistory";
import CreatingOrders from "../modules/CreatingOrders/CreatingOrders";



const HomePage = () => {
    //const {isAuth, email} = useAuth();
    const {isAuth} = useAuth();
    const dispatch = useDispatch();

    const name = useSelector(state => state.user.name);
    const surname = useSelector(state => state.user.surname);


    // DONT TOUCH
    return (
        <div className={styles.page}>
            <SideMenu />

            <div className={styles.page_content}>
                <h1>{name} {surname}</h1>   
                <p>Exit</p>             
                
                <IDCard />
                <OrdersHistory />
                <CreatingOrders />
            </div>
        </div>
    );
    


    
    // DONT TOUCH
    /*
    return isAuth ? (
        <div style={styles}>
            <h1>Welcome to the document page!</h1>
            <h3>Account: {name} {surname}</h3>

            <button onClick={() => dispatch(removeUser())}>
                Log out
            </button>
        </div>
    ) : (
        <Navigate to='/login' />
    );
    */
}


export default HomePage;
