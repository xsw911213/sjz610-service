let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");


function getPersonData(userinfoRromClient,res) {
  let collection = 'persondatas'

  let condidtion = userinfoRromClient;

  let fields ={
    _id: true,
    name: true,
    tel: true,
    part: true,
    remark: true,
    signined: true
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

  db.find(dbPth, schemaOptions.personData, collection, condidtion, fields, null, error, succ);
}

function updataPersonData(userinfoRromClient,res){
  let collection = 'persondatas'
  let oldVal = {};

  if(userinfoRromClient.signined){
    oldVal = {tel:userinfoRromClient.tel}
  }else{
    oldVal = {_id:userinfoRromClient._id};
  }

  let newVal = userinfoRromClient;

  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    if(userinfoRromClient.signined){
      if(result.n == 1){
        resData = {
          status: "success",
          code:1,
          text: '签到成功'
        }
      }else{
        resData = {
          status: "success",
          code:0,
          text: '签到失败'
        }
      }
    }else{
      resData = {
        status: "success",
        text: '修改成功'
      }
    }

    

    res.json(resData)
  }

  db.update(dbPth, schemaOptions.personData, collection, oldVal, newVal, error, succ);
}


let personData = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getPersonData(req.query, res)
  } else if (req.method === 'DELETE') {
    //deleteLivingMsg(req.query, res)
  } else if (req.method === 'PUT') {
    updataPersonData(req.body, res)
  } else if (req.method === 'POST') {
    //insertLivingMsg(req.body, res)
  } 

}

module.exports = personData;