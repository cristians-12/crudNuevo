import axios from "./axios";

export const verAdd = ()=>axios.get('/getAdd')
export const insertAdd = (datos)=>axios.post('/aggAdd',datos)