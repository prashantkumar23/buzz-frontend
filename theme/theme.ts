import { createTheme } from '@material-ui/core/styles';


export const coreThemeObj = createTheme({
    palette: {
        primary: {
            main: "#D35100"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 3000, // changed for floating button
        }
    },
    typography: {
        fontFamily: [
            'GTMaru',
            'LarsBuzz',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
})


export const lightTheme = createTheme({
    ...coreThemeObj,
    palette: {
        ...coreThemeObj.palette,
        mode: "light",
        background: {
            paper: "#FAF9F6",
            default: "#ffffff"
        },
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#2B2B2B"
        }
    }
})

export const darkTheme = createTheme({
    ...coreThemeObj,
    palette: {
        ...coreThemeObj.palette,
        mode: "dark",
        background: {
            paper: "#2B2B2B",
            default: "#000000"
        },
        text: {
            disabled: "#fff"
        },
        primary: {
            main: "#fff",
            light: "#575151",
            // contrastText: "#fff"
        },
        secondary: {
            main: "#e6e6e6"
        },

    }
})


