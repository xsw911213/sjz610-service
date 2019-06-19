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
      "password": "123456",
    }
  ]
  db.insert(dbPth, schemaOptions.user, collection, users);
}

let initModules = function () {

  let collection = 'modules'

  let modules = [
    { name:'会议介绍',show:true},
    { name:'观摩服务',show:true},
    { name:'活动日程',show:true},
    { name:'新闻报道',show:true},
    { name:'直播间',show:true},
    { name:'互动留言',show:true},
    { name:'一键导航',show:true},
    { name:'往届旅发',show:true},
    { name:'吃住行游乐购',show:true},
  ]

  let m = {
    dataid:"data01",
    modules
  }

  db.insert(dbPth, schemaOptions.modules, collection, m);

}

initUsers();
// initModules();



// let initPersonData = function(){
//   let collection = 'persondatas'

//   let personData = require('./personData');

//   db.insert(dbPth, schemaOptions.personData, collection, personData);
// }
// initPersonData();