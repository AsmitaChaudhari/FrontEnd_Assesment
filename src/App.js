
import './App.css';
import StudentsComponent from './Components/students.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const font =  "'Raleway', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Raleway',
    'sans-serif'
  ].join(','),
  },
});

function App() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
        <StudentsComponent></StudentsComponent>
    </ThemeProvider>

    </div>
  );
}

export default App;
