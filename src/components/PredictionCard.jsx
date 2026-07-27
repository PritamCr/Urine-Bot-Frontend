import {

Paper,
Typography,
List,
ListItem,
Chip,
Stack

} from "@mui/material";


function PredictionCard({

prediction

}){


return (

<Paper

elevation={6}

sx={{

marginTop:4,

padding:3,

borderRadius:3,

background:"#ffffff"

}}

>


<Typography

variant="h5"

fontWeight="bold"

color="primary"

>

🔁 Final Prediction

</Typography>



<Typography

variant="h6"

sx={{
marginTop:3
}}

>

Possible Disease

</Typography>



<Stack

direction="row"

spacing={1}

flexWrap="wrap"

>

{

prediction.disease.map(

(d,index)=>(

<Chip

key={index}

label={d}

color="primary"

sx={{
marginTop:1
}}

/>

)

)

}

</Stack>




<Typography

variant="h6"

sx={{
marginTop:3
}}

>

Symptoms

</Typography>


<List>

{

prediction.symptoms.map(

(s,index)=>(

<ListItem key={index}>

🤒 {s}

</ListItem>

)

)

}

</List>




{

prediction.needs_consultation_suggestion &&


<Paper

sx={{

padding:2,

background:"#fff3cd"

}}

>


<Typography

fontWeight="bold"

>

🩺 Doctor Consultation Recommended

</Typography>


<Typography>

{prediction.reason_for_suggestion}

</Typography>


</Paper>


}


</Paper>


);


}


export default PredictionCard;