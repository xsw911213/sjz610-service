// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");


function gerUserInfo(userinfoRromClient,res){
  let collection = 'users';

  let condidtion = { username: userinfoRromClient.username };
  
  let fields ={
    _id: true,
    username: true,
    password: true,
  }

  let resData = {}

  function error(err){
    console.log(err)
  }
  // 数据库查询成功，完成验证
  function succ(result){
    console.log(result)

    let userinfoRromDB = result[0];

    if(userinfoRromDB.password == userinfoRromClient.password){
      console.log('验证通过');
      resData =  {
        status : "success",
        path : "/main",
        userinfo : {
          userid : userinfoRromDB._id,
          name : userinfoRromDB.name,
          // username : userinfoRromDB.username,
          // password: userinfoRromDB.password,
        }
      }

      res.json(resData)
    }else{
      console.log('验证没通过');
        let errorObj = {
          status : 400,
          message: "用户名或密码错误"
        }
        res.status(errorObj.status).json(errorObj)
    }
  }
  
  db.find(dbPth, schemaOptions.user, collection, condidtion, fields, null, error, succ);
}

let loginService = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.body)

  gerUserInfo(req.body,res)

}
module.exports = loginService;