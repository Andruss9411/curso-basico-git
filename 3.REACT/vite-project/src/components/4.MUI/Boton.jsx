import React from "react";
import Button from "@mui/material/Button"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Boton = () =>{
    return(
        <>
            <Button variant="contained">Contained</Button>
            <Switch {...label} defaultChecked />
        </>
    )
}

export default Boton;