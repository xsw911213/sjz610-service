let db = require('./db/index')
let schemaOptions = require('./db/schemaOptions')
let dbPth = require('../config').dbPth;

// let mongoose = require('mongoose');
// console.log(mongoose.model)

// mongoose.model.remove('users',function(err){
//   console.log(err)
// });
// mongoose.model.remove('menus',function(err){
//   console.log(err)
// });

let initUsers = function () {

  let collection = 'users'

  let users = [
    {
      "userid": 1,
      "username": "admin",
      "password": "xu123456",
    }
  ]
  db.insert(dbPth, schemaOptions.user, collection, users);
}
initUsers();

let initModules = function () {

  let collection = 'modules'

  let modules = [
    { name:'签到',show:true},
    { name:'会议日程',show:true},
    { name:'图文直播',show:true},
    { name:'旅游交易会',show:true},
    { name:'智慧地图',show:true},
    { name:'景区导览',show:true},
    { name:'留言板',show:true},
    { name:'名片夹',show:true},
    { name:'个人中心',show:true},
  ]

  let m = {
    dataid:"data01",
    modules
  }

  db.insert(dbPth, schemaOptions.modules, collection, m);

}

initModules();
