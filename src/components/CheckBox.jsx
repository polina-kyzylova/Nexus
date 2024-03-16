import { Box, FormControlLabel, Checkbox } from "@mui/material";


const CheckBox = () => {
    const styles = {
        fontFamily: 'Overpass',
        fontWeight: '400',
        color: '#fff'
    }

    return (
        <Box>
            <FormControlLabel style={styles}
                label='Запомнить меня' 
                name='chbx'
                control={<Checkbox 
                    sx={{
                        color: 'dimgray',
                        '&.Mui-checked': {
                            color: '#75BDF8'
                        }
                    }}
                />} 
            />
        </Box>
    )
}


export default CheckBox;