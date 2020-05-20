//   在http.js中引入axios
import axios from 'axios'   //引入 axios
import { Message } from 'element-ui'    //引入 element-ui 的 Message 模块，用于信息提示
import store from '@/store'     //引入 vuex 中的数据
import { getToken } from '@/utils/auth'   //引入拿到的权限tocken

// create an axios instance   创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000, // request timeout  设置请求超时时间
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
// create an axios instance
service.interceptors.request.use(
    config => {
        // 在发送请求之前做什么
        if (config.method === "post") {
            // 序列化
            // config.data = qs.stringify(config.data);
            // config.data = JSON.stringify(config.data);
            // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
        } else {
            if (store.getters.token) {
                // 若是有做鉴权token , 就给头部带上token
                // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
                // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage (隐身模式)的使用
                config.headers['X-Token'] = getToken()
            }
        }
        return config;
    },
    error => {
        // 对请求错误做些什么，自己定义
        Message({                  //使用element-ui的message进行信息提示
            showClose: true,
            message: error,
            type: "warning"
        });
        return Promise.reject(error);
    })

   export default service; 