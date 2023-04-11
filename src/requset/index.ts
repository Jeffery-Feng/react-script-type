import axios from 'axios'

interface axiosParams {
    url:string
    method:string
    headers?:{[propName:string]:any}
    params?:{[propName:string]:any}
    data?:{[propName:string]:any}
    withCredentials?:true | false
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.create({
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

const request = ({
    url,
    method = 'get',
    headers,
    params,
    data,
}:axiosParams) => {
    return new Promise(( resolve, reject )=>{
        switch (method.toLowerCase()) {
            case 'post':
                axios({
                    url,
                    method,
                    headers,
                    params,
                    data,
                    withCredentials: true,
                  }).then(( res ) => {
                    
                    return resolve(res)
                  })
                  .catch(( err ) => {
                    return reject(err)
                  })
                break;
        
            default:
                //get put delete
                axios({
                    url,
                    method,
                    headers,
                    params,
                    data,
                    withCredentials : true
                }).then( res => resolve(res))
                    .catch( err => reject(err))    
                break;
        };
        //拦截器（去axios.js官网上去找拦截器）
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // console.log('对请求错误做些什么',error.response)
            // 对响应错误做点什么
            return Promise.reject(error);           
        });
    })
}

export default request