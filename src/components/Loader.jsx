import {
    CircularProgress,
    Box
} from "@mui/material";


function Loader(){

    return (

        <Box
            sx={{
                display:"flex",
                justifyContent:"center",
                marginTop:3
            }}
        >

            <CircularProgress />

        </Box>

    );

}


export default Loader;