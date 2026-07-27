import api from "./api";


export const refinePrediction = async(
    parameters,
    symptoms
)=>{

    const response = await api.post(
        "/prediction/refine",
        {
            urine_parameters: parameters,
            symptoms: symptoms
        }
    );


    return response.data;

};