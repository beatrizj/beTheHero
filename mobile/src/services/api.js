import axios from 'axios'
import { NativeModules } from 'react-native'

const api = axios.create({
    baseURL: 'http://192.168.15.164:3333'
})

export default api