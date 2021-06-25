import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { ApiService } from "../Services/api.service";
import StudentCardComponent from "./studentCard.component";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import SearchStudent from "./searchStudent.component";

const useStyle = makeStyles((theme) => ({
    items: {
        padding: theme.spacing(4),
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
    },
    paper: {
        overflow: "auto",
        maxHeight: "90vh",
        minWidth: "fitContent",
    },
}));

export default function StudentsComponent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [studentData, setStudentData] = useState([]);
    const [nameFilter, setNameFilter] = useState([]);
    const [tagFilter, setTagFilter] = useState([]);

    const classes = useStyle();

    useEffect(() => {
        gettingData();
    }, []);

    const addNewTag = (e, index) => {
        const studentDataWithTag = [...studentData];
        studentDataWithTag[index].tags.push(e)
        setStudentData(studentDataWithTag)
    }

    const handleOnChangeName = (e) => {
        const value = e;
        const nameMatches = [];

        studentData.filter((x) => {
            const fullName = `${x.firstName} ${x.lastName}`.toLowerCase();
            if (fullName.includes(value.toLowerCase())) {
                nameMatches.push(x)
            }
        })

        const contentFilter = [];
        tagFilter.filter((x) => {
            const fullName = `${x.firstName} ${x.lastName}`.toLowerCase();
            if (fullName.includes(value.toLowerCase())) {
                contentFilter.push(x);
            }
        })
        setData(contentFilter);
        setNameFilter(nameMatches)
    };

    const handleOnChangeTag = (e) => {
        const tagMatches = [];
        const contentFilter = [];
        if (e) {
            studentData.filter((x) => {
                let flag = false;
                x.tags.filter(tag => {
                    if (tag.toLowerCase().includes(e.toLowerCase())) {
                        flag = true;
                    }
                })
                if (flag) {
                    tagMatches.push(x)
                }
            })
            data.filter((x) => {
                let flag = false;
                x.tags.filter(tag => {
                    if (tag.toLowerCase().includes(e.toLowerCase())) {
                        flag = true;
                    }
                })
                if (flag) {
                    contentFilter.push(x)
                }
            })

            setData(contentFilter);
            setTagFilter(tagMatches)
        } else {
            setData(nameFilter);
            setTagFilter(studentData)
        }
    }

    const addTag = (students) => {
        let updatedRecords = []
        students.map((student) => {
            let addEmptyTag = student;
            addEmptyTag.tags = []
            updatedRecords.push(addEmptyTag)
        })
        setData(updatedRecords)
        setStudentData(updatedRecords)
        setNameFilter(updatedRecords)
        setTagFilter(updatedRecords)

    }

    const gettingData = async () => {
        await ApiService.fetchData()
            .then(async (response) => {
                addTag(response.students)
                setError(null);
            })
            .catch((err) => {
                setError(err);
            });
    };
    return (
        <Container className={classes.items}>
            <Paper className={classes.paper} variant="outlined">
                <SearchStudent handleOnChange={handleOnChangeName} searchType={'name'} />
                <SearchStudent handleOnChange={handleOnChangeTag} searchType={'tag'} />
                {console.log(data)}
                {data.map((item) => {
                    return (
                        <StudentCardComponent
                            item={item}
                            error={error}
                            key={item.id}
                            addNewTag={addNewTag}
                        ></StudentCardComponent>
                    );
                })}
            </Paper>
        </Container>
    );
}
