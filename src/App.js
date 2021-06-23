
import { CssBaseline } from '@material-ui/core';
import './App.css';
import MainComponent from './Components/main.component';
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
        <MainComponent></MainComponent>
    </ThemeProvider>

    </div>
  );
}

export default App;
