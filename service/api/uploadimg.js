// let upload = require('./upload')

// let express = require('express')

// let app = express()

// app.get('/api/upload', upload.upload)

// module.exports = app


let qiniu = require('qiniu')
let sha1 = require('sha1')

// 七牛提供的公钥
let accessKey = 'WfnvMISqP2jslX8PwHyOqiOBY15Gjrnd3Q1-IYn3'
// 七牛提供的私钥
let secretKey = 'qfnF3RxWqK2rAc7TVyPOZL-rIp_xwn5kqkkHKuWF'
// 存储空间名
let bucketName = 'exhibition'

let uploadimgFun = function (req, res){
  console.log(req.query)

  // 文件名
  let fileName = `${sha1(req.query.fileName)}.${req.query.fileName.split('.').pop()}`

  // console.log(fileName)

  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  let putPolicy = new qiniu.rs.PutPolicy({
    scope: `${bucketName}:${fileName}`,
    expires: 60 * 60 * 1,
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
  })

  
  // 上传凭证
  let uploadToken = putPolicy.uploadToken(mac)

  res.send({
    code: '1',
    desc: 'ok',
    result: {
      bucketName,
      fileName,
      uploadToken
    }
  })
}

module.exports = uploadimgFun;

// module.exports = (req, res) => {
  
  
// }