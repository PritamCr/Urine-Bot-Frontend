import api from "./api";


export const refinePrediction = async(
    parameters,
    symptoms
)=>{

    try{


        const response = await api.post(

            "/prediction/refine",

            {
                urine_parameters: parameters,

                symptoms: symptoms
            }

        );


        return response.data;


    }
    catch(error){


        console.log(
            "Refine API Error:",
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
            "Refinement failed. Please try again."
        );


    }

};