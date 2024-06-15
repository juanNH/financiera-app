import axios from "axios";

/**
 * Instance backend server for api services
 */
const axiosInstanceServer = axios.create({
    baseURL: process.env.API_URL
})

/**
 * Instance of backend server for client services
 */
const axiosInstanceClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

/**
 * Instance of dolarApi server
 */
const axiosDolarApiServer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOLAR_API_URL
})

/**
 * Instance of Bcra server 
 */
const axiosBcraServer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BCRA_API_UR
})
export  {axiosInstanceServer, axiosInstanceClient, axiosDolarApiServer, axiosBcraServer};