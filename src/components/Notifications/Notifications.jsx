import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import { useState } from "react";
import notif from './notifications.png';
import orderNotif from './order_notif.png';
import myStyle from './Notifications.module.css';
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from '../../store/slices/ordersSlice';
import useWebSocket from "react-use-websocket";



export default function Notifications() {
  const [backendData, setBackendData] = useState({});
  const [notications, setNotications] = useState(0);
  const userID = useSelector(state => state.user.card_id);
  const dispatch = useDispatch();

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setNotications(0);
        setBackendData({});
    };


    const WS_URL = 'ws://localhost:5050';

    useWebSocket(WS_URL, {
      onOpen: () => {
        console.log('WebSocket connection established');
      },
      onMessage: (message) => {
        console.log('New message from WebSocket');
        let dataJSON = JSON.parse(message.data);

        if (dataJSON.ID_Студента === userID && Object.keys(dataJSON).length != null) {
          setNotications(1);
          dispatch(updateOrderStatus({
            Номер_Заявки: dataJSON.Номер_Заявки,
            Статус: 'Выполнена',
            Статус_Код: 1,
          }));
          setBackendData(dataJSON);
        }
      }
    });


  return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Badge badgeContent={notications}
                   color="error"
                   onClick={handleClick}
                   size="small"
                   aria-controls={open ? 'account-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   >
                <img className={myStyle.notific} src={notif} alt="" />
            </Badge>

            {notications ? <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                                                
                <MenuItem>
                    Уведомления
                </MenuItem>

                <Divider />

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <img src={orderNotif} alt='' className={myStyle.order} />
                    </ListItemIcon>
                    <p className={myStyle.text}>Выполнена заявка <span>№{backendData.Номер_Заявки}</span></p>
                </MenuItem>
            </Menu> : null}
        </Box>
        </ThemeProvider>
    </div>
  )
}
