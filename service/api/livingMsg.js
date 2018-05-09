let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function getLivingMsg(userinfoRromClient,res){
  let collection = 'livingmsgs';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    meeting: true,
    time: true,
    text: true,
    img: true
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

  db.find(dbPth, schemaOptions.livingMsg, collection, condidtion, fields, null, error, succ);
}

function insertLivingMsg(userinfoRromClient,res){

  let collection = 'livingmsgs';

  // let condidtion = userinfoRromClient;
  
  let data = userinfoRromClient;

  data.time = new Date();

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

  db.insert(dbPth, schemaOptions.livingMsg, collection, data, error, succ);

  // db.update(dbPth, schemaOptions.livingMsg, collection, oldVal, newVal, error, succ);
}

function deleteLivingMsg(userinfoRromClient,res){
  let collection = 'livingmsgs';
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
  db.remove(dbPth, schemaOptions.livingMsg, collection, delConditon, error, succ)
}

function updateLivingMsg(userinfoRromClient,res){
  let collection = 'livingmsgs';

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

  db.update(dbPth, schemaOptions.livingMsg, collection, oldVal, newVal, error, succ);
}


let livingMsg = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getLivingMsg(req.query, res)
  } else if (req.method === 'DELETE') {
    deleteLivingMsg(req.query, res)
  } else if (req.method === 'PUT') {
    updateLivingMsg(req.body, res)
  } else if (req.method === 'POST') {
    insertLivingMsg(req.body, res)
  } 

}

module.exports = livingMsg;