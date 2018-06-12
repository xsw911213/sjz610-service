let db = require('./db/index')
let schemaOptions = require('./db/schemaOptions')
let dbPth = require('../config').dbPth;

let personData = require('./personData');

console.log(personData.length)
// for(let i = 0;i < 863;i++){
//   if(i < 582){

//   }
// }

personData.forEach((item,index)=>{
  if(index < 582){
    item.signined = true;
  }else{
    item.signined = false;
  }
})

let initPersonData = function(){
  let collection = 'persondatas'

  db.insert(dbPth, schemaOptions.personData, collection, personData);
}
initPersonData();