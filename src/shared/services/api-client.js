import axios from 'axios';

export const apiClient={
    async get(URL){
        try{
            const response=await axios.get(URL);
            return response;
        }
        catch(err){
            throw err;
        }
    },
    async post(URL,data){
        try{
            const response=await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){

    },
    remove(){

    }
}