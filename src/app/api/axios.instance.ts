import axios from "axios";

const axiosInstanceServer = axios.create({
    baseURL: process.env.API_URL
})

const axiosInstanceClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export  {axiosInstanceServer, axiosInstanceClient};