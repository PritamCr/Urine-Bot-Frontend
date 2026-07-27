import {
    Button,
    Grid,
    Typography,
    Paper
} from "@mui/material";


const parameters = [
    "PH",
    "Bilirubin",
    "Urobilinogen",
    "SG",
    "Ketone",
    "Protein",
    "Blood",
    "Nitrite",
    "Glucose",
    "Leukocytes"
];


function ParameterSelector({
    selectedParameters,
    setSelectedParameters
}) {


    const toggleParameter = (param)=>{

        if(selectedParameters.includes(param)){

            setSelectedParameters(
                selectedParameters.filter(
                    item => item !== param
                )
            );

        }
        else{

            setSelectedParameters([
                ...selectedParameters,
                param
            ]);

        }

    };


    return (

        <Paper
            elevation={3}
            sx={{
                padding:3,
                marginTop:3
            }}
        >

            <Typography
                variant="h6"
                gutterBottom
            >
                Select Abnormal Urine Parameters
            </Typography>


            <Grid container spacing={2}>

                {
                    parameters.map((param)=>(

                        <Grid

                            item

                            xs={12}

                            sm={6}

                            md={4}

                            >

                            <Button

                                fullWidth

                                variant={
                                    selectedParameters.includes(param)
                                    ?
                                    "contained"
                                    :
                                    "outlined"
                                }

                                onClick={()=>
                                    toggleParameter(param)
                                }

                            >

                                {param}

                            </Button>

                        </Grid>

                    ))
                }


            </Grid>


        </Paper>

    );

}


export default ParameterSelector;