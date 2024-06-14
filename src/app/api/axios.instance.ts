import axios from "axios";

const axiosInstanceServer = axios.create({
    baseURL: process.env.API_URL
})
const axiosDolarApiServer = axios.create({
    baseURL: 'https://dolarapi.com/v1'
})
const axiosInstanceClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export  {axiosInstanceServer, axiosInstanceClient, axiosDolarApiServer};