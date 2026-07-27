import api from "./api";


export const predictSymptoms = async(parameters)=>{

    const response = await api.post(
        "/prediction/predict",
        {
            urine_parameters: parameters
        }
    );


    return response.data;

};