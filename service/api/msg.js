// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function insertMsg(userinfoRromClient,res){

  let collection = 'msgs';

  // let condidtion = userinfoRromClient;
  
  let data = userinfoRromClient;

  // console.log(userinfoRromClient)

  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    resData = {
      status: "success",
      text: '添加成功'
    }

    res.json(resData)
  }

  db.insert(dbPth, schemaOptions.msg, collection, data, error, succ);

  // db.update(dbPth, schemaOptions.livingMsg, collection, oldVal, newVal, error, succ);
}

function getMsg(userinfoRromClient,res){
  let collection = 'msgs';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    title: true,
    msg: true,
  }

  function succ(result){
    console.log(result);
    let resObj = {
      status: 'success',
      data: result
    }

    res.json(resObj)
  }

  function error(error){
    console.log(error)
  }

  db.find(dbPth, schemaOptions.msg, collection, condidtion, fields, null, error, succ);
}

let msg = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.body)
  if (req.method === 'POST') {
    insertMsg(req.body,res)
  }else if(req.method === 'GET'){
    getMsg(req.params,res)
  }
}
module.exports = msg;