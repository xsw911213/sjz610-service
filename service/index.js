// 服务入口文件

let loginService = require('./api/login');

let pageConfig = require('./api/pageConfig');

let modules = require('./api/modules');

let meetingNotice = require('./api/meetingNotice');

let news = require('./api/news');

let meetingIntroduce = require('./api/meetingIntroduce');

let viewService = require('./api/viewService');

let msg = require('./api/msg');

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
    path: '/meetingnotice',
    fun: meetingNotice
  },
  {
    path: '/news',
    fun: news
  },
  {
    path: '/pageconfig',
    fun: pageConfig
  },
  {
    path: '/meetingintroduce',
    fun: meetingIntroduce
  },
  {
    path: '/su',
    fun: viewService
  },
  {
    path: '/msg',
    fun: msg
  }


]


module.exports = services;