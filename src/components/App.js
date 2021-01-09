import Grid from './Grid'
import ControlPanel from './ControlPanel'
import Test from './Test'
import '../style/App.css';
import {Jumbotron} from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <ControlPanel/>
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Grid />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

App.whyDidYouRender = true

export default App;
