import Grid from './Grid'
import ControlPanel from './ControlPanel'
import '../style/App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
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
      <Grid />
    </ThemeProvider>
  );
}

App.whyDidYouRender = true

export default App;
