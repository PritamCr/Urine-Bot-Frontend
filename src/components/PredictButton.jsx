import {
    Button
} from "@mui/material";


function PredictButton({
    onClick,
    disabled
}){


    return (

        <Button

            variant="contained"

            fullWidth

            sx={{
                marginTop:3
            }}

            onClick={onClick}

            disabled={disabled}

        >

            🔍 Predict Symptoms

        </Button>

    );

}


export default PredictButton;