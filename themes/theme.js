import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme( {
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff79c6',
      },
      secondary: {
        main: '#ffb86c',
      },
      background: {
        default: '#282a36',
        paper: '#282a36',
      },
      text: {
        primary: '#a9b2c3',
      },
      success: {
        main: '#50fa7b',
      },
      error: {
        main: '#ff5555',
      },
      warning: {
        main: '#ffb86c',
      },
      info: {
        main: '#8be9fd',
      },
    },

    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',  
        ].join(','),
    },
  });