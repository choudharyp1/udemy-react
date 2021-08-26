import axios from "axios";


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GKdTPm5M2utCtgXf2U1LDroSLcjZjnXwfsp9i73JV9Q',
    }
})
