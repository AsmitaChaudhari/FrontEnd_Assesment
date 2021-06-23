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
    minWidth: "800px",
  }
}));

export default function StudentsComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [studentData, setStudentData] = useState([]);

  const classes = useStyle();
  useEffect(() => {
    gettingData();
  }, []);

  const handleOnChange = (e) => {
      
    const value = e;
    const matches = [];
    if (value !== "") {
      matches.push(
        studentData.filter((x) => {
          const fullName = `${x.firstName} ${x.lastName}`.toLowerCase();
          if (fullName.includes(value.toLowerCase())) {
            return x;
          }
        })
      );
      setData(...matches);
    } else {
      setData(data);
    }
  };

  const gettingData = async () => {
    await ApiService.fetchData()
      .then(async (response) => {
        setData(response.students);
        setStudentData(response.students);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <Container className={classes.items}>
      <Paper className={classes.paper} variant="outlined">
        <SearchStudent handleOnChange={handleOnChange}/>
        {data.map((item) => {
          return (
            <StudentCardComponent
              item={item}
              error={error}
              key={item.id}
            ></StudentCardComponent>
          );
        })}
      </Paper>
    </Container>
  );
}
