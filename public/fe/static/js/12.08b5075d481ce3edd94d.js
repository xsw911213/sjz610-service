webpackJsonp([12],{jrsb:function(t,s){},o7em:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"CardCase",data:function(){return{signed:!1,table:[]}},mounted:function(){var t=this,s=JSON.parse(localStorage.getItem("localData"));s&&s.signined&&(t.signed=!0,t.axios({method:"get",url:"/persondata",baseURL:t.host.baseUrl}).then(function(s){var a=s.data.data;console.log(a),t.table=a.sort(function(t,s){return t.index-s.index}),console.log(t.table)}))}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"card-case"}},[t.signed?a("div",{staticClass:"head"},[a("p",{staticClass:"status"},[t._v("名片夹")])]):a("div",{staticClass:"head"},[a("p",{staticClass:"sigin-promot"},[t._v("请完成签到")]),t._v(" "),a("a",{staticClass:"go-sigin",on:{click:function(s){t.$router.push({path:"/signin"})}}},[t._v("去签到")])]),t._v(" "),a("div",{staticClass:"list"},t._l(t.table,function(s,e){return a("div",{key:e,staticClass:"line"},[a("p",{staticClass:"colum name"},[t._v(t._s(s.name))]),t._v(" "),a("a",{staticClass:"colum tel",attrs:{href:"tel:"+s.tel}},[t._v(t._s(s.tel))]),t._v(" "),a("p",{staticClass:"colum part"},[t._v(t._s(s.part))])])}))])},staticRenderFns:[]};var i=a("VU/8")(e,n,!1,function(t){a("jrsb")},null,null);s.default=i.exports}});
//# sourceMappingURL=12.08b5075d481ce3edd94d.js.map