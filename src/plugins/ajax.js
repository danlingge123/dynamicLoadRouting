
import './axios'
function request(method, url, data){ 
    //暴露 request 给我们好API 管理
    method = method.toLocaleLowerCase() 
    if (method === 'post') {
      return axios.post(url, data)    //axios的post 默认转化为json格式
    } else if (method === 'get') {     
      return axios.get(url, {
        params: data
      })
    } else if (method === 'delete') {
      return axios.delete(url, {
        params: data
      })
    }
  }
  let http={
      admin(){
        return  request('get','admin');
      },
      token(){
        return request('get','token');
      }
     


  };
  export default http;





  