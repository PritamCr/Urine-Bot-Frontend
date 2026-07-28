import {
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Chip,
    Stack
} from "@mui/material";

import { useState } from "react";


const parameters = [

    { name: "PH", type: "range" },
    { name: "Bilirubin", type: "boolean" },
    { name: "Urobilinogen", type: "boolean" },
    { name: "SG", type: "range" },
    { name: "Ketone", type: "boolean" },
    { name: "Protein", type: "boolean" },
    { name: "Blood", type: "boolean" },
    { name: "Nitrite", type: "boolean" },
    { name: "Glucose", type: "boolean" },
    { name: "Leukocytes", type: "boolean" }

];



function ParameterSelector({

    selectedParameters,

    setSelectedParameters

}) {


    const [open, setOpen] = useState(false);

    const [current, setCurrent] = useState(null);

    const [condition, setCondition] = useState("");

    const [value, setValue] = useState("");



    const openDialog = (param) => {


        const existing =
            selectedParameters.find(
                p => p.name === param.name
            );


        setCurrent(param);



        if(existing){

            setCondition(existing.condition);

            setValue(existing.value || "");

        }
        else{

            setCondition(
                param.type === "range"
                ?
                "high"
                :
                "positive"
            );

            setValue("");

        }


        setOpen(true);

    };





    const saveParameter = () => {


        if(current.type === "range"){


            const number = Number(value);



            if(isNaN(number)){

                alert(
                    "Value must be numeric"
                );

                return;

            }



            if(current.name === "PH"){


                if(number < 0 || number > 14){

                    alert(
                        "PH value must be between 0 and 14"
                    );

                    return;

                }

            }



            if(current.name === "SG"){


                if(number < 1.000 || number > 1.050){

                    alert(
                        "SG value must be between 1.000 and 1.050"
                    );

                    return;

                }

            }


        }




        const newParameter = {


            name: current.name,


            condition: condition,


            value:
                current.type === "range"
                ?
                value
                :
                null

        };





        const filtered =
            selectedParameters.filter(
                p => p.name !== current.name
            );



        setSelectedParameters([

            ...filtered,

            newParameter

        ]);



        setOpen(false);

    };






    const removeParameter = (name)=>{


        setSelectedParameters(

            selectedParameters.filter(
                p => p.name !== name
            )

        );

    };







    return (

<Paper

elevation={4}

sx={{

    p:4,

    mt:3,

    borderRadius:4

}}

>



<Typography

variant="h5"

fontWeight="bold"

>

🧪 Select Urine Parameters

</Typography>





<Typography

color="text.secondary"

sx={{mb:3}}

>

Select abnormal urine parameters.

</Typography>







<Grid

container

spacing={3}

>


{

parameters.map(param=>(


<Grid

item

xs={12}

sm={6}

md={4}

lg={3}

key={param.name}

>


<Card

sx={{


height:150,


borderRadius:3,


border:

selectedParameters.some(
p=>p.name===param.name
)

?

"2px solid #1976d2"

:

"1px solid #ddd"


}}

>


<CardContent>


<Typography

variant="h6"

>

{param.name}

</Typography>



<Typography

variant="body2"

color="text.secondary"

>

{

param.type==="range"

?

"Low / High"

:

"Positive / Negative"

}


</Typography>


</CardContent>




<Button


variant={


selectedParameters.some(
p=>p.name===param.name
)

?

"contained"

:

"outlined"


}


sx={{m:2}}


onClick={()=>openDialog(param)}


>


{

selectedParameters.some(
p=>p.name===param.name
)

?

"Edit"

:

"Select"

}


</Button>



</Card>



</Grid>


))

}



</Grid>







{

selectedParameters.length>0 &&


<>


<Typography

fontWeight="bold"

sx={{mt:3}}

>

Selected Parameters

</Typography>




<Stack

direction="row"

spacing={1}

flexWrap="wrap"

sx={{mt:1}}

>


{

selectedParameters.map(p=>(


<Chip

key={p.name}

label={`${p.name}: ${p.condition}`}

color="primary"

onDelete={()=>removeParameter(p.name)}

/>


))

}


</Stack>


</>


}








<Dialog

open={open}

onClose={()=>setOpen(false)}

fullWidth

maxWidth="xs"

>



<DialogTitle>

Configure {current?.name}

</DialogTitle>






<DialogContent>





<FormControl sx={{mt:2}}>


<RadioGroup


value={condition}


onChange={(e)=>{

setCondition(
e.target.value
);

}}


>


{

current?.type==="range"


?


<>


<FormControlLabel

value="low"

control={<Radio/>}

label="Low"

/>



<FormControlLabel

value="high"

control={<Radio/>}

label="High"

/>


</>


:


<>


<FormControlLabel

value="positive"

control={<Radio/>}

label="Positive"

/>




<FormControlLabel

value="negative"

control={<Radio/>}

label="Negative"

/>


</>


}



</RadioGroup>


</FormControl>








{

current?.type==="range"

&&



<TextField


fullWidth



label={

current?.name==="PH"

?

"PH Value (0-14)"

:

"SG Value (1.000-1.050)"

}




value={value}




onChange={(e)=>{


const input =
e.target.value;



if(

input === ""

||

/^\d*\.?\d*$/.test(input)

){


setValue(input);


}



}}




inputProps={{

inputMode:"decimal"

}}



sx={{mt:2}}


/>


}





</DialogContent>







<DialogActions>



<Button

onClick={()=>setOpen(false)}

>

Cancel

</Button>





<Button

variant="contained"


onClick={saveParameter}



disabled={

!condition ||

(

current?.type==="range"

&&

(

!value ||

isNaN(Number(value))

)

)

}


>


Save

</Button>




</DialogActions>





</Dialog>





</Paper>


);


}



export default ParameterSelector;