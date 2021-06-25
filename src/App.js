
import './App.css';
import StudentsComponent from './Components/students.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: ['Raleway',
    'sans-serif'
  ].join(','),
  h4: {
    fontWeight: 'bold'
  }
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
