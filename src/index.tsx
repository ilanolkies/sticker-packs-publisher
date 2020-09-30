import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import './index.scss';
import App from './App';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4360DF',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ECEFFC',
      contrastText: '#4360DF'
    },
  },
});

ReactDOM.render(<ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
