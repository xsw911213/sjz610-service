let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function insertmeetingNotice(userinfoRromClient,res){

  let collection = 'meetingnotice';

  // let condidtion = userinfoRromClient;
  
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

  db.insert(dbPth, schemaOptions.meetingNotice, collection, data, error, succ);

  // db.update(dbPth, schemaOptions.meetingNotice, collection, oldVal, newVal, error, succ);
}

function deletemeetingNotice(userinfoRromClient,res){
  let collection = 'meetingnotice';
  let delConditon = userinfoRromClient;

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {

    resData = {
      status: "success",
      text: '删除成功'
    }

    res.json(resData)
  }
  db.remove(dbPth, schemaOptions.meetingNotice, collection, delConditon, error, succ)
}

function updatemeetingNotice(userinfoRromClient,res){
  let collection = 'meetingnotice';

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

  db.update(dbPth, schemaOptions.meetingNotice, collection, oldVal, newVal, error, succ);
}

function getmeetingNotice(userinfoRromClient,res){
  let collection = 'meetingnotice';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    title: true,
    richText: true
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

  db.find(dbPth, schemaOptions.meetingNotice, collection, condidtion, fields, null, error, succ);
}


let meetingNotice = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getmeetingNotice(req.query, res)
  } else if (req.method === 'DELETE') {
    deletemeetingNotice(req.query, res)
  } else if (req.method === 'PUT') {
    updatemeetingNotice(req.body, res)
  } else if (req.method === 'POST') {
    insertmeetingNotice(req.body, res)
  } 

}

module.exports = meetingNotice;