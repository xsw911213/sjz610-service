webpackJsonp([10],{"2aar":function(t,i){},mlqX:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=[{text:"签到",img:"../../static/icon/sigin.png",show:!0,path:"/signin"},{text:"会议日程",img:"../../static/icon/date.png",show:!0,path:"/date"},{text:"图文直播",img:"../../static/icon/liveing.png",show:!0,path:"/living"},{text:"旅游交易会",img:"../../static/icon/meeting.png",show:!0,path:"/trademeet"},{text:"智慧地图",img:"../../static/icon/map.png",show:!0,path:"/map"},{text:"景区导览",img:"../../static/icon/dh.png",show:!0,path:"/dh"},{text:"留言板",img:"../../static/icon/msg.png",show:!0,path:"/msg"},{text:"名片夹",img:"../../static/icon/card.png",show:!0,path:"/cardcase"},{text:"个人中心",img:"../../static/icon/pc.png",show:!0,path:"/individualcenter"}],a={name:"index",data:function(){return{text:"index",btns:e,slide:!0,loaddivshow:!1,singined:!1}},methods:{e:function(t){t.preventDefault()},go:function(t){this.$router.push({path:t})},loadingAnimate:function(){}},mounted:function(){var t=JSON.parse(localStorage.getItem("localData"));t&&t.signined&&(this.singined=!0),this.axios({method:"get",url:"/modules",baseURL:this.host.baseUrl}).then(function(t){var i=t.data.data.modules;e.forEach(function(t,n){i.forEach(function(i,n){t.text===i.name&&(t.show=i.show)})})})}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"index"}},[e("div",{staticClass:"container"},[e("img",{staticClass:"index-head",attrs:{src:n("wRKz")}}),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticClass:"btns"},t._l(t.btns,function(i,n){return i.show?e("a",{key:n,on:{click:function(n){t.go(i.path)}}},[e("img",{attrs:{src:i.img}}),t._v(" "),e("span",[t._v(t._s(i.text))])]):t._e()}))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loaddivshow,expression:"loaddivshow"}],class:"loading "+(t.slide?"":"loading-hide")},[e("img",{staticClass:"logo",attrs:{src:"http://img.huashenghaoche.com/tms/test/logo.png",alt:""},on:{click:t.e}})])])},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("2aar")},null,null);i.default=o.exports},wRKz:function(t,i,n){t.exports=n.p+"static/img/index-head.0eb556a.png"}});
//# sourceMappingURL=10.779fd9a2894a366d7367.js.map