webpackJsonp([10],{pkPf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{livingMsg:[]}},methods:{e:function(t){t.preventDefault()},getMsg:function(){var t=this;console.log(this.$route.query.meeting),this.axios({method:"get",url:"/livingmsg",params:{meeting:this.$route.query.meeting},baseURL:this.host.baseUrl}).then(function(e){console.log(e),t.livingMsg=e.data.data})}},mounted:function(){this.getMsg()}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"living-detail"}},[i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"msg"},[i("p",{staticClass:"title"},[t._v("直播大厅")]),t._v(" "),t.livingMsg.length>0?i("ul",{staticClass:"text"},t._l(t.livingMsg,function(e,s){return i("li",{key:s,staticClass:"item"},[i("p",{staticClass:"item-time"},[t._v(t._s("2018-6-"+new Date(e.time).getDate()+" "+new Date(e.time).getHours()+":"+(new Date(e.time).getMinutes()<10?"0"+new Date(e.time).getMinutes():new Date(e.time).getMinutes())))]),t._v(" "),e.img?i("img",{staticClass:"item-img",attrs:{src:e.img,alt:""}}):t._e(),t._v(" "),e.text?i("p",{staticClass:"item-text"},[t._v(t._s(e.text))]):t._e()])})):i("ul",{staticClass:"text"},[i("p",{staticClass:"nothing"},[t._v("您来早了，会议还没开始")])])])])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("qUzr")},null,null);e.default=a.exports},qUzr:function(t,e){}});
//# sourceMappingURL=10.75accfc4ecdaf2a5eb85.js.map