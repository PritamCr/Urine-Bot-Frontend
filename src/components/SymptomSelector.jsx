import {
    Paper,
    Typography,
    FormControlLabel,
    Checkbox,
    Button
} from "@mui/material";


function SymptomSelector({

    symptoms,

    selectedSymptoms,

    setSelectedSymptoms,

    onRefine

}){


    const handleChange=(symptom)=>{


        if(selectedSymptoms.includes(symptom)){


            setSelectedSymptoms(
                selectedSymptoms.filter(
                    item=>item!==symptom
                )
            );


        }
        else{


            setSelectedSymptoms([
                ...selectedSymptoms,
                symptom
            ]);


        }


    };



    return (

        <Paper

            elevation={3}

            sx={{
                marginTop:3,
                padding:3
            }}

        >


            <Typography
                variant="h6"
            >

                Select Your Symptoms

            </Typography>



            {
                symptoms.map(
                    (symptom,index)=>(


                    <FormControlLabel

                        key={index}

                        control={

                            <Checkbox

                                checked={
                                    selectedSymptoms.includes(
                                        symptom
                                    )
                                }

                                onChange={()=>
                                    handleChange(symptom)
                                }

                            />

                        }

                        label={symptom}

                    />


                ))
            }



            <Button

                variant="contained"

                fullWidth

                sx={{
                    marginTop:2
                }}

                onClick={onRefine}

                disabled={
                    selectedSymptoms.length===0
                }

            >

                🔍 Refine Prediction

            </Button>



        </Paper>

    );

}


export default SymptomSelector;