import Grid from './Grid'
import ControlPanel from './ControlPanel'
import '../style/App.css';
import {Jumbotron} from 'reactstrap'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#181a1b'
    },
  },
}
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Jumbotron>
        <ControlPanel/>
      </Jumbotron>
      <Jumbotron>
        <Grid/>
      </Jumbotron>
    </ThemeProvider>
  );
}

App.whyDidYouRender = true

export default App;
