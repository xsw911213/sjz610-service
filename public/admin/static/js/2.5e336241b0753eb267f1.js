webpackJsonp([2],{1002:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{modules:[],dataid:""}},methods:{succ:function(t){this.modules=t.data.modules,this.dataid=t.data.dataid},error:function(t){console.log(t)},getModules:function(){this.ajax.http("get",this.host.baseUrl+"/modules",{},this.succ,this.error)},subSucc:function(t){this.$notify({title:"保存成功",message:"保存成功",type:"success"}),this.getModules()},submit:function(){var t={dataid:this.dataid,modules:this.modules};this.ajax.http("put",this.host.baseUrl+"/modules",t,this.subSucc,this.error)}},mounted:function(){this.getModules()}}},1011:function(t,e,s){e=t.exports=s(984)(),e.push([t.i,".module{display:inline-block;width:200px;margin-top:20px}.module span{display:inline-block;width:90px}","",{version:3,sources:["/Users/wei/codespace/www/yy/sjz610-admin/src/views/pageconfig.vue"],names:[],mappings:"AACA,QACE,qBAAsB,AACtB,YAAa,AACb,eAAiB,CAClB,AACD,aACI,qBAAsB,AACtB,UAAY,CACf",file:"pageconfig.vue",sourcesContent:["\n.module {\n  display: inline-block;\n  width: 200px;\n  margin-top: 20px;\n}\n.module span {\n    display: inline-block;\n    width: 90px;\n}\n"],sourceRoot:""}])},1020:function(t,e,s){var i=s(1011);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(985)("55117acf",i,!0)},1029:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h3",[t._v("展示模块")]),t._v(" "),s("div",{staticClass:"modules",staticStyle:{width:"1050px"}},t._l(t.modules,function(e,i){return s("div",{key:i,staticClass:"module"},[s("span",[t._v(t._s(e.name))]),t._v(" "),s("el-switch",{model:{value:e.show,callback:function(s){t.$set(e,"show",s)},expression:"item.show"}})],1)})),t._v(" "),s("el-button",{staticStyle:{"margin-top":"30px",width:"100px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"60px"}},[t._v("总体访问数据（截止6月30日）")]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{"margin-top":"40px","font-size":"16px"}},[t._v("UV(访问人数) ："),s("span",{staticStyle:{"font-size":"18px",color:"red"}},[t._v("97693")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{"margin-top":"20px","font-size":"16px"}},[t._v("PV(访问量)     ："),s("span",{staticStyle:{"font-size":"18px",color:"red"}},[t._v("175683")])])}]}},993:function(t,e,s){s(1020);var i=s(118)(s(1002),s(1029),null,null);t.exports=i.exports}});
//# sourceMappingURL=2.5e336241b0753eb267f1.js.map