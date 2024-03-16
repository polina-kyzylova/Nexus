import { useSelector } from "react-redux";


const OrderTemplate = ({active}) => {
    const info = {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '45% auto',
        gridAutoFlow: 'column',
        //marginTop: '5%',
    }

    const info_details = {
        height: '9vw',
        width: '16vw',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        listStyle: 'none',
        color: '#696F73',
        fontFamily: 'Overpass',
        fontWeight: '400',
        fontSize: '1vw',
    }

    const info_values ={
        height: '9vw',
        width: 'auto',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        listStyle: 'none',
        color: '#fff',
        fontFamily: 'Overpass',
        fontWeight: '400',
        fontSize: '1vw',
    }

    const nbr = {
        color: '#74BDF8',
        fontWeight: '600',
    }

    const { name, surname, last_name, group }= useSelector(state => state.user);
    

    return (
        <div style={info}>
            <ul style={info_details}>
                <li>Наименование услуги:</li>
                <li>ФИО студента:</li>
                <li>Учебная группа:</li>
            </ul>

            <ul style={info_values}>
                <li style={nbr}>{active}</li>
                <li>{surname} {name} {last_name}</li>
                <li>{group}</li>
            </ul>
        </div>
    )
}


export default OrderTemplate;