const BASE_URL = 'http://123.207.32.32:9001'
class MYrequest{
  request(url,method,params){
    return new Promise((resolve,reject) =>{
      wx.request({
        url: BASE_URL + url,
        method:method,
        data:params,
        success:function(res){
          resolve(res.data)
        },
        fail:function(err){
          reject(err)
        }
      })
    })
  }
  get(url,params){
    return this.request(url,"GET",params)
  }
  post(url,data){
    return this.request(url,"POST",data)
  }
}
const myrequest = new MYrequest()
export default myrequest