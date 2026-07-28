import api from "./api";


export const predictSymptoms = async(parameters)=>{

    try{

        const response = await api.post(
            "/prediction/predict",
            {
                urine_parameters: parameters
            }
        );


        return response.data;


    }
    catch(error){


        console.log(
            "Prediction API Error:",
            error.response?.data
        );


        if(error.response?.data?.detail){


            const detail =
                error.response.data.detail;


            if(Array.isArray(detail)){

                throw new Error(
                    detail[0].msg
                );

            }


            throw new Error(detail);


        }


        throw new Error(
            "Prediction failed. Please try again."
        );


    }

};