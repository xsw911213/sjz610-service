let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function insertNews(userinfoRromClient,res){

  let collection = 'news';

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

  db.insert(dbPth, schemaOptions.news, collection, data, error, succ);

  // db.update(dbPth, schemaOptions.news, collection, oldVal, newVal, error, succ);
}

function deleteNews(userinfoRromClient,res){
  let collection = 'news';
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
  db.remove(dbPth, schemaOptions.news, collection, delConditon, error, succ)
}

function updateNews(userinfoRromClient,res){
  let collection = 'news';

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

  db.update(dbPth, schemaOptions.news, collection, oldVal, newVal, error, succ);
}

function getNews(userinfoRromClient,res){
  let collection = 'news';

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    title: true,
    richText: true,
    text: true,
    headImg: true
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

  db.find(dbPth, schemaOptions.news, collection, condidtion, fields, null, error, succ);
}


let news = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getNews(req.query, res)
  } else if (req.method === 'DELETE') {
    deleteNews(req.query, res)
  } else if (req.method === 'PUT') {
    updateNews(req.body, res)
  } else if (req.method === 'POST') {
    insertNews(req.body, res)
  } 

}

module.exports = news;