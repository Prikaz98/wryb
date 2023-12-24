import axios from 'axios';

const instance = axios.create({
  //baseURL : 'https://192.168.0.7'
    baseURL : 'http://localhost:3000'
})

export default instance
