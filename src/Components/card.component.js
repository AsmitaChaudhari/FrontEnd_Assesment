import { makeStyles  } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';



const font =  "'Raleway', sans-serif";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '1px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    cover: {
        display: 'flex',
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        flex: '1 0 auto',
    },
    large: {
        border: '0.1px solid lightgrey',
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: 'white'
      },
    
}))


export default function CardComponent(props) {
    const classes = useStyles();

    if (props.error) {
        <Paper>
            <Typography>{props.error}</Typography>
        </Paper>
    }
    else {
        const avg = (props.item.grades).reduce((a, b) => parseInt(a) + parseInt(b), 0) / props.item.grades.length;
        return (
            
                <Card className={classes.root} key={props.item.id}>
                    <CardMedia className={classes.cover}>
                    <Avatar alt="Remy Sharp" src={props.item.pic} className={classes.large} />
                    </CardMedia>
                   
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography variant="h4"> {props.item.firstName + " " + props.item.lastName} </Typography>
                            <Typography variant="subtitle1" > Email: {props.item.email} </Typography>
                            <Typography variant="subtitle1" > Company: {props.item.company} </Typography>
                            <Typography variant="subtitle1" > Skill: {props.item.skill} </Typography>
                            <Typography variant="subtitle1" >Average: {avg} % </Typography>
                        </CardContent>
                    </div>
                </Card>
           
        )
    }
}