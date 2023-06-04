import {createTheme} from "@mui/material"
import {lightBlue, blueGrey} from "@mui/material/colors"


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: lightBlue[700],
            dark: lightBlue[800],
            light: lightBlue[700],
            contrastText: "#ffffff",

        },
        secondary: {
            main: blueGrey[500],
            dark: blueGrey[700],
            light: blueGrey[300],
            contrastText: "#ffffff",
        },
        background: {
            default: "#f7f6f3" ,
            paper: "#ffffff",
        }
    }
});
