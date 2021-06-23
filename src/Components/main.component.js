import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react"
import { ApiService } from "../Services/api.service";
import CardComponent from "./card.component";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles((theme) => ({
    items: {
        padding: theme.spacing(4),
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
    },
    paper: {
        overflow: 'auto',
        maxHeight:'80vh',
        minWidth: '800px',
    }
}));

export default function MainComponent() {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    const classes = useStyle();
    useEffect(() => {
        gettingData()
    })

    const gettingData = async () => {
        await ApiService.fetchData()
            .then(async (response) => {
                setData(response.students)
                setError(null)
            }).catch(err => {
                setError(err)
            })
    }
    return (
        
        <Container className={classes.items} >
            <Paper className={classes.paper} variant="outlined">
            {(data) ? data.map((item) => {
                return (
                        <CardComponent item={item} error={error} key={item.id}></CardComponent>
                )
            }) : <p>No data to Display</p>}
</Paper>
</Container>

    )
}