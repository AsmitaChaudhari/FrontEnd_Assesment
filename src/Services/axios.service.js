import axios from 'axios';

export class AxiosService {

    static instance;

    static getInstance() {
        if (!AxiosService.instance) {
            AxiosService.instance = new AxiosService()
        }
        return AxiosService.instance;
    }

    get(url, config) {
        return axios.get(url, config)
    }

    delete(url, config) {
        return axios.delete(url, config)
    }

    post(url, config) {
        return axios.post(url, config)
    }

    put(url, config) {
        return axios.put(url, config)
    }

}