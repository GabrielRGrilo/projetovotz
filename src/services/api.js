import axios from "axios"



export const api = axios.create({
    baseURL: 'https://pmv-ads-2023-2-e4-proj-dad-t2-votz.onrender.com/api'
    // baseURL: 'https://pmv-ads-2023-2-e4-proj-dad-t2-votz-1.onrender.com/api'
})
