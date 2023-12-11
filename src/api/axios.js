import axios from "axios";

const instancia = axios.create({
    baseURL:"https://crudbackend-mnlu.onrender.com/app",
    // baseURL:"https://localhost:3000/app",
    withCredentials:true
})

export default instancia;