webpackJsonp([11],{"7Qp3":function(t,e){},SBkm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{article:null}},methods:{init:function(){var t=this;t.axios({method:"get",url:"/"+t.$route.params.module,baseURL:t.host.baseUrl,params:{_id:this.$route.params.id}}).then(function(e){t.article=e.data.data[0],console.log(t.article)})}},mounted:function(){this.init()}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"article-detial"}},[t.article?i("div",{staticClass:"article"},[i("p",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),t._v(" "),i("div",{staticClass:"article-html",domProps:{innerHTML:t._s(t.article.richText)}})]):t._e()])},staticRenderFns:[]};var n=i("VU/8")(a,r,!1,function(t){i("7Qp3")},null,null);e.default=n.exports}});
//# sourceMappingURL=11.2ec0d4c76d0dca2444b3.js.map