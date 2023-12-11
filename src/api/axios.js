import axios from "axios";

const instancia = axios.create({
    baseURL:"https://crudbackend-mnlu.onrender.com/app",
    withCredentials:true
})

export default instancia;
