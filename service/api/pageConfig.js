let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function getBaseInfo(userinfoRromClient,res){
  let collection = 'baseinfos';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    userid: true,
    pageInfo: true,
    roomList: true,
    printers: true,
    commodityList: true
  }

  function succ(result){
    // console.log(result)
    let resObj = {
      status: 'success',
      data: result[0]
    }

    res.json(resObj)
  }

  function error(error){
    console.log(error)
  }

  db.find(dbPth, schemaOptions.baseInfo, collection, condidtion, fields, null, error, succ);
}

function putBaseInfo(userinfoRromClient,res){

  let collection = 'baseinfos';

  // let condidtion = userinfoRromClient;
  let oldVal = {userid:userinfoRromClient.userid};
  
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

  db.update(dbPth, schemaOptions.baseInfo, collection, oldVal, newVal, error, succ);
}


let baseInfoSetting = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getBaseInfo(req.query, res)
  } else if (req.method === 'PUT') {
    putBaseInfo(req.body, res)
  }

}

module.exports = baseInfoSetting;