import {
    Container,
    Typography,
    Alert
} from "@mui/material";


import {
    useState
} from "react";


import ParameterSelector
from "../components/ParameterSelector";


import PredictButton
from "../components/PredictButton";


import Loader
from "../components/Loader";


import SymptomSelector
from "../components/SymptomSelector";


import PredictionCard
from "../components/PredictionCard";


import {
    predictSymptoms
}
from "../api/predictionApi";


import {
    refinePrediction
}
from "../api/refineApi";

import DownloadReport
from "../components/DownloadReport";



function Home(){


const [parameters,setParameters]=useState([]);


const [initialPrediction,setInitialPrediction]
=useState(null);



const [finalPrediction,setFinalPrediction]
=useState(null);



const [selectedSymptoms,setSelectedSymptoms]
=useState([]);



const [loading,setLoading]=useState(false);



const [error,setError]=useState("");




const handlePredict=async()=>{


try{

setLoading(true);

setError("");

const result =
await predictSymptoms(parameters);


setInitialPrediction(result);


}

catch(err){

setError(
"Prediction failed"
);

}

finally{

setLoading(false);

}


};





const handleRefine=async()=>{


try{


setLoading(true);


const result =
await refinePrediction(
parameters,
selectedSymptoms
);


setFinalPrediction(result);



}

catch(err){


setError(
"Refinement failed"
);


}

finally{

setLoading(false);

}


};





return (

<Container maxWidth="md">


<Typography

variant="h4"

align="center"

sx={{
marginTop:5,
fontWeight:"bold"
}}

>

🧪 AI Urine Disease Predictor

</Typography>




<ParameterSelector

selectedParameters={parameters}

setSelectedParameters={setParameters}

/>




<PredictButton

onClick={handlePredict}

disabled={
parameters.length===0
}

/>



{
loading && <Loader/>
}



{
error &&

<Alert severity="error">

{error}

</Alert>

}





{
initialPrediction &&

<SymptomSelector

symptoms={
initialPrediction.symptoms
}

selectedSymptoms={
selectedSymptoms
}

setSelectedSymptoms={
setSelectedSymptoms
}

onRefine={
handleRefine
}

/>

}





{
    finalPrediction &&

    <>

        <PredictionCard

            prediction={finalPrediction}

        />


        <DownloadReport

            parameters={parameters}

            selectedSymptoms={selectedSymptoms}

            prediction={finalPrediction}

        />

    </>

}



</Container>

);


}


export default Home;