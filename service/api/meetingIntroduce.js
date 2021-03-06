// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function insertMeetingIntroduce(userinfoRromClient,res){

  let collection = 'meetingintroduce';
  
  let data = userinfoRromClient;

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

  db.insert(dbPth, schemaOptions.meetingIntroduce, collection, data, error, succ);

  // db.update(dbPth, schemaOptions.livingMsg, collection, oldVal, newVal, error, succ);
}

function updateMeetingIntroduce (userinfoRromClient,res){
  let collection = 'meetingintroduce'

  let oldVal = {_id:userinfoRromClient._id};

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

  db.update(dbPth, schemaOptions.meetingIntroduce, collection, oldVal, newVal, error, succ);
}

function getMeetingIntroduce(userinfoRromClient,res){
  let collection = 'meetingintroduce';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    imgurl: true
  }

  function succ(result){
    console.log(result);
    let resObj = {
      status: 'success',
      data: result[0] || null
    }

    res.json(resObj)
  }

  function error(error){
    console.log(error)
  }

  db.find(dbPth, schemaOptions.meetingIntroduce, collection, condidtion, fields, null, error, succ);
}

let meetingIntroduce = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.body)
  if (req.method === 'POST') {
    insertMeetingIntroduce(req.body,res)
  }else if(req.method === 'PUT'){
    updateMeetingIntroduce(req.body,res)
  }else if(req.method === 'GET'){
    getMeetingIntroduce(req.params,res)
  }
}
module.exports = meetingIntroduce;