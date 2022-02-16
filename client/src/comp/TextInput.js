import React from 'react'
import Input from '@material-ui/core/Input';
import {Send} from '@mui/icons-material'
import Button from '@material-ui/core/Button';
import { Paper, Grid } from '@mui/material';
import { TextField } from '@material-ui/core';
import { useState } from 'react';

const TextInput = (props) => {

    const [formData, setFormData] = useState('')

    const handleFormChange = (e) => {
        setFormData(e.target.value);
        props.setPassUpMessage(formData);
    };


    return (
        <Paper fullWidth sx={{display: 'flex', alignItems: 'flex-end'}} component='form' onSubmit={() => {props.sendMessageFunction()}}>
            
            
            <TextField fullWidth name='message' value={formData} onChange={handleFormChange} label='message'></TextField>
            <Button type='submit'  variant="contained" color="primary" >
                <Send />
            </Button>
        
        </Paper>
    )
}
export default TextInput;