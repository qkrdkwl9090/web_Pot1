import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root:{
        '& > *':{
            width:'100%',
        }
    },
    textField: {
        border: "2px solid #3f51b5",
        borderRadius: theme.shape.borderRadius,
        color: "white",
    },
    input:{
        color: "white"
    }
}));
export default function BasicTextFields({type, placeholder}){
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" InputProps={{className: classes.input}} margin="dense" type={type} placeholder={placeholder} variant="outlined" className={classes.textField}/>
        </form>
    )
}

