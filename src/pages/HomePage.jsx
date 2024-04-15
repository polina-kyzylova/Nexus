import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

import SideMenu from '../modules/Menu/Menu'
import styles from './HomePage.module.css'
import IDCard from '../modules/IDCard/IDCard'
import OrdersHistory from "../modules/OrdersHistory/OrdersHistory";
import CreatingOrders from "../modules/CreatingOrders/CreatingOrders";



const HomePage = () => {
    const {isAuth, name, surname} = useAuth();
    const dispatch = useDispatch();

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




    // FINAL
    /*
    return isAuth ? (
        <div className={styles.page}>
            <SideMenu />

            <div className={styles.page_content}>
                <h1>{name} {surname}</h1>   
                <button onClick={() => dispatch(removeUser())}>
                    Log out
                </button>           
                
                <IDCard />
                <OrdersHistory />
                <CreatingOrders />
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    );
    */
    
}


export default HomePage;
