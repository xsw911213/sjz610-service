let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

let request = require('request');

function getModules(userinfoRromClient,res){
  let collection = 'modules';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    dataid: true,
    modules: true
  }

  function succ(result){
    let resObj = {
      status: 'success',
      data: result[0]
    }
    // 获取天气信息
    request('https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/114.37,38.30/realtime.json', function (error, response, body) {
      console.log(body)
      resObj.w = JSON.parse(body).result
      resObj.serverTime = new Date()
      res.json(resObj)
    })
  }

  function error(error){
    console.log(error)
  }

  db.find(dbPth, schemaOptions.modules, collection, condidtion, fields, null, error, succ);
}

function putModules(userinfoRromClient,res){

  let collection = 'modules';

  // let condidtion = userinfoRromClient;
  let oldVal = {dataid:userinfoRromClient.dataid};
  console.log(userinfoRromClient)
  
  let newVal = userinfoRromClient;

  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    resData = {
      status: "success",
      text: '修改成功'
    }

    res.json(resData)
  }

  db.update(dbPth, schemaOptions.modules, collection, oldVal, newVal, error, succ);
}


let baseInfoSetting = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getModules(req.query, res)
  } else if (req.method === 'PUT') {
    putModules(req.body, res)
  }

}

module.exports = baseInfoSetting;