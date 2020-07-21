import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-qiuz-87cdc.firebaseio.com/'
})