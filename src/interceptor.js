import axios from 'axios';
//import store from 'your/store/path/store'

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.token;
        if(token) {
            config.headers.Token = token;
        }
        config.url = "http://localhost/jobhunapi/public/api/v1";
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}