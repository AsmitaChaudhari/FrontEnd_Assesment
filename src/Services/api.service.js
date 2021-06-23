import {AxiosService} from './axios.service'

const url = 'https://api.hatchways.io/assessment/students';


export class ApiService{
    static axiosService = AxiosService.getInstance();

    static async fetchData(){
        
        let response;
        let responseData;
        response = await  this.axiosService.get(url);
        if(!responseData){
            responseData = response?.data;
        }
        if (response?.status === 200){
            let checkContent = responseData && (Array.isArray(responseData) || Object.keys.length > 0)
            if (!checkContent) { throw new Error('No Data Found') } else { return responseData };
        }
    }
            

}