import axios from 'axios';
import serverConfig from './config/index'
import {useWeatherStore } from '@/stores/System/weather'

//初始化實例
const serviceAxios = axios.create({
    baseURL:serverConfig.baseURL,
    timeout:10000,
    withCredentials: false,
})
//請求攔截
serviceAxios.interceptors.request.use(
    (config)=>{
        console.log("請求配置",config);
        return config
    },
    (error)=>{
        Promise.reject(error);
    }
)
//響應攔截
serviceAxios.interceptors.response.use(
    (res)=>{
        console.log("響應結束",res);
        //處理業務邏輯
        const store = useWeatherStore()
        // console.log(store);
        store.setData(res)
        store.setLocation()
        store.setData(res)
        store.setTempList()
    },
    (error)=>{
        console.log(error);
    }
)
export default serviceAxios