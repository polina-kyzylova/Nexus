import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/use-auth';
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { deleteAllOrders } from "../../store/slices/ordersSlice";
import { useState } from "react";

import SideMenu from '../../modules/Menu/Menu'
import styles from './HomePage.module.css'
import IDCard from '../../modules/IDCard/IDCard'
import OrdersHistory from "../../modules/OrdersHistory/OrdersHistory";
import CreatingOrders from "../../modules/CreatingOrders/CreatingOrders";


import notif from './notifications.png';
import profile from './profile.png';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider, createTheme } from '@mui/material/styles';




const HomePage = () => {
    const {isAuth, name, surname} = useAuth();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const logOutUser = () => {
      handleClose();
      dispatch(removeUser());
      dispatch(deleteAllOrders());
    };

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    });



    // DONT TOUCH
    
    
    //return (
    return isAuth ? (
        <div className={styles.page}>
            <SideMenu />

            <div className={styles.page_content}>
                <h1>{name} {surname}</h1>   
                <div className={styles.profile}>
                    <Badge badgeContent={0} color="error">
                        <img className={styles.notific} src={notif} alt="" />
                    </Badge>

                    <ThemeProvider theme={darkTheme}>
                        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                            <img className={styles.avatar} src={profile} alt="" />
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="medium" color="primary" />
                                    </ListItemIcon>
                                    Профиль
                                </MenuItem>

                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <ContactSupportIcon fontSize="medium" color="primary" />
                                    </ListItemIcon>
                                    Помощь
                                </MenuItem>

                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    Настройки
                                </MenuItem>

                                <Divider />

                                <MenuItem onClick={() => logOutUser()}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    Выход
                                </MenuItem>
                            </Menu>
                        </Box>
                    </ThemeProvider>
                </div>
                           
                
                <IDCard />
                <OrdersHistory />
                <CreatingOrders />
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    );
    //);
    
}


export default HomePage;
