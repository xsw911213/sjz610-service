// 服务入口文件

let loginService = require('./api/login');


// 用户基本信息设置（查询基本信息、修改基本信息）
let pageConfig = require('./api/pageConfig');

let modules = require('./api/modules');

let livingMsg = require('./api/livingMsg');



// let hotelSetting = require('./api/hotelSetting');
// let beginAdSetting = require('./api/beginAdSetting');
// let topAdSetting = require('./api/topAdSetting');
// let getAd = require('./api/getAdRequestFromClient')


// 上传图片服务
let uploadimg = require('./api/uploadimg');


let services = [
  {
    path: '/uploadimg',
    fun: uploadimg
  },
  {
    path: '/login',
    fun: loginService
  },
  {
    path: '/modules',
    fun: modules
  },
  {
    path: '/livingmsg',
    fun: livingMsg
  },
  {
    path: '/pageconfig',
    fun: pageConfig
  }


]


module.exports = services;