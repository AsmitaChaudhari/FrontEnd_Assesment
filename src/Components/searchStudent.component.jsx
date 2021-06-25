import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    searchbar: {
        margin: theme.spacing(2)
    }
}))

 const SearchStudent = ({handleOnChange, searchType}) => {

    const classes = useStyles();

    return(
        <Box className={classes.searchbar}>
        <TextField
            name="studentSearch"
            label={`Search by ${searchType}`}
            fullWidth
            placeholder={`Search by ${searchType}...`}
            margin='dense'
            size='small'
            onChange={(e) => handleOnChange(e.target.value)}
        /></Box>
    )
}

export default SearchStudent;