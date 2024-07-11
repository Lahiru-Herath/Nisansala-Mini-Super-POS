import { createTheme } from '@mui/material/styles';
import { tokens } from './theme';

// CREATE THE BASE THEME
const baseTheme = createTheme({
    palette: {
        primary: {
            ...tokens.primary,
            main: tokens.primary[500],
            light: tokens.primary[400],
        },
        secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
        },
        grey: {
            ...tokens.grey,
            main: tokens.grey[500],
        },
        background: {
            default: tokens.background.main,
            light: tokens.background.light,
        },
    },
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 32,
        },
        h2: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 24,
        },
        h3: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 20,
            fontWeight: 800,
            color: tokens.grey[200],
        },
        h4: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.grey[300],
        },
        h5: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.grey[500],
        },
        h6: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 10,
            color: tokens.grey[700],
        },
    },
});

// Extend the theme to include the tertiary color
const theme = createTheme(baseTheme, {
    palette: {
        tertiary: {
            main: tokens.tertiary[500],
        },
    },
});

export default theme;
