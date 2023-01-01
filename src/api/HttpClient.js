import axios from "axios";

const baseURL = "https://api-beta.melobit.com/v1/"

const  getMelobitApi=axios.create({
    baseURL:baseURL
    
})

export{getMelobitApi}