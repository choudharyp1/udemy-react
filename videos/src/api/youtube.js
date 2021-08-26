import axios from "axios";

const KEY = 'AIzaSyAB3kRbLniELbSTcvqEI_j_1A3OElLvx94'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})