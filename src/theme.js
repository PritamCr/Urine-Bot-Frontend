import { createTheme } from "@mui/material/styles";


const theme = createTheme({

    palette: {

        primary: {
            main:"#1976d2"
        },

        secondary:{
            main:"#2e7d32"
        },

        background:{
            default:"#f4f7fb"
        }

    },


    typography:{

        fontFamily:
        "Roboto, Arial, sans-serif"

    },


    shape:{

        borderRadius:12

    }

});


export default theme;