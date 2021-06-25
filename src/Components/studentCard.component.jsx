import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '1px',
        width: 'auto'
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
    expandbtn: {
        alignSelf: 'baseline',
    },
    btn: {
        backgroundColor: 'lightgrey'
    },
    grade: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    tagInput: {
        marginTop: theme.spacing(1)
    }

}))


export default function StudentCardComponent(props) {
    const classes = useStyles();
    const [toggleState, setToggleState] = useState(false);
    const [tag, setTag] = useState('');

    const toggleBtn = () => {
        setToggleState(!toggleState)
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            const value = e.target.value.trim()
            if (value.length > 0) {
                props.addNewTag(value, index - 1);
                setTag('')
            }
        }
    }
   
    if (props.error) {
        <Paper>
            <Typography>{props.error}</Typography>
        </Paper>
    }
    else {
        const avg = (props.item.grades).reduce((a, b) => parseInt(a) + parseInt(b), 0) / props.item.grades.length;
        const fullName = (props.item.firstName + " " + props.item.lastName).toUpperCase()
        return (

            <Card className={classes.root} key={props.item.id}>
                <CardMedia className={classes.cover}>
                    <Avatar alt="pic" src={props.item.pic} className={classes.large} />
                </CardMedia>

                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h4"> {fullName} </Typography>
                        <Typography variant="subtitle1" > Email: {props.item.email} </Typography>
                        <Typography variant="subtitle1" > Company: {props.item.company} </Typography>
                        <Typography variant="subtitle1" > Skill: {props.item.skill} </Typography>
                        <Typography variant="subtitle1" >Average: {avg} % </Typography>
                        <div className={classes.grade}>
                            {toggleState &&
                                (props.item.grades.map((item, index) => {
                                    return (
                                        <Typography variant='subtitle1' key={index}>Item{index + 1} : {item}%</Typography>)
                                })
                                )}
                        </div>
                        {(props.item.tags.length > 0) && (
                            props.item.tags.map((t, index) => <Chip label={t} key={index} style={{ margin: '2px' }} />)
                        )}
                        <div className={classes.tagInput}>
                            <TextField
                                name="add tag"
                                value={tag}
                                label="Add Tag"
                                onKeyDown={(e) => handleKeyDown(e, props.item.id)}
                                onChange={e => setTag(e.target.value)}
                            />
                        </div>
                    </CardContent>
                </div>
                <CardActions disableSpacing className={classes.expandbtn}>
                    {toggleState ? (
                        <IconButton className={classes.btn} onClick={toggleBtn}><RemoveIcon /></IconButton>
                    ) : (
                        <IconButton className={classes.btn} onClick={toggleBtn}><AddIcon /></IconButton>
                    )}
                </CardActions>
            </Card>

        )
    }
}