import axios from "axios";

export function request(config){

      //1.创建axios的实例
      const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout:5000
      })
      //axios的拦截器
      //请求拦截
      instance.interceptors.request.use(config=>{
        // console.log(config);
        //config 信息不附和服务器要求
        //发送网络请求都希望在界面中显示一个请求的图标
        //某些网络请求比如登录 必须携带特殊信息
        return config
      },err=>{
        console.log(err);
      })   
      //响应拦截 
        instance.interceptors.response.use(res=>{
          console.log(res);
          return res.data
        },(err)=>{
          console.log(err);
        })
    //发送真正的网络请求
    //本质就是一个proimse
     return instance(config)
}

