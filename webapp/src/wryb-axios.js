import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://192.168.0.7'
})

export default instance
