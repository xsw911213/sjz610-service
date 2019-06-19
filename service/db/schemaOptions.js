// users集合  数据模型
let user = {
  username: {type: String},
  password: {type: String},
  role: {type: String},
  name: {type: String},
  tel: {type: String},
  remark: {type: String}
}

// menu集合  数据模型
let modules = {
  dataid:{type: String},
  modules: {type: Array, default: []},
}

let meetingNotice = {
  title:{type: String},
  richText:{type: String}
}

let news = {
  title:{type: String},
  richText:{type: String},
  text:{type: String},
  headImg:{type: String}
}

let meetingIntroduce = {
  imgurl:{type: String},
}

let viewService = {
  imgurl:{type: String},
}

// baseInfo集合  数据模型
// let baseInfo = {
//   userid: {type: String},
//   pageInfo: {type: Object,default: {
//       tel:'',
//       delivery: false,
//       startTime: '',
//       endTime:'',
//       marked:'您的订单我们已经收到，费用将在您退房时一并结算。'
//     }
//   },
//   roomList: {type: Array, default: []},
//   printers: {type: Array, default: []},
//   commodityList: {type: Array, default: []},
// }

//commodity集合  数据模型
// let commodity = {
//   userid: {type: String},
//   commodityList: {type: Array, default: []},
// }

let schemaOption = {
  user,
  modules,
  meetingNotice,
  news,
  meetingIntroduce,
  viewService
  // commodity
}

module.exports = schemaOption;
