import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import { useState } from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    searchbar: {
        margin: theme.spacing(2)
    }
}))

 const SearchStudent= ({handleOnChange}) => {

    const classes = useStyles();

    return(
        <Box className={classes.searchbar}>
        <TextField
            name="studentSearch"
            label="Search"
            fullWidth
            placeholder="Search by name..."
            margin='dense'
            size='small'
            onChange={(e) => handleOnChange(e.target.value)}
        /></Box>
    )
}

export default SearchStudent;