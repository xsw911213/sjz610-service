webpackJsonp([4],{1001:function(e,t,a){t=e.exports=a(983)(),t.push([e.i,".avatar-uploader-icon{font-size:28px;color:#8c939d;width:150px;height:150px;line-height:150px;text-align:center;border:1px dashed #8c939d}.avatar{width:150px;height:150px;display:block}","",{version:3,sources:["/Users/wei/code/sjz610-admin/src/views/liveRoom.vue"],names:[],mappings:"AACA,sBACC,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,yBAA2B,CAC3B,AACD,QACC,YAAa,AACb,aAAc,AACd,aAAe,CACf",file:"liveRoom.vue",sourcesContent:["\n.avatar-uploader-icon {\n\tfont-size: 28px;\n\tcolor: #8c939d;\n\twidth: 150px;\n\theight: 150px;\n\tline-height: 150px;\n\ttext-align: center;\n\tborder: 1px dashed #8c939d;\n}\n.avatar {\n\twidth: 150px;\n\theight: 150px;\n\tdisplay: block;\n}\n"],sourceRoot:""}])},1007:function(e,t,a){var o=a(1001);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(984)("5e098f8c",o,!0)},1013:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("现场图片")]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"//up.qbox.me/","show-file-list":!1,data:e.uploadform,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.img?a("img",{staticClass:"avatar",attrs:{src:e.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("h3",[e._v("文字")]),e._v(" "),a("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1)},staticRenderFns:[]}},986:function(e,t,a){a(1007);var o=a(118)(a(992),a(1013),null,null);e.exports=o.exports},992:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{img:"",textarea:""}},methods:{handleAvatarSuccess:function(e,t,a){this.ruleForm.img=""+this.host.imgBaseUrl+e.key},beforeAvatarUpload:function(e){var t=e.size/1024/1024<1,a=this;if(t){var o={fileName:e.name};return axios.get(a.host.baseUrl+"/uploadimg",{params:o}).then(function(e){"1"===e.data.code?a.uploadform={key:e.data.result.fileName,token:e.data.result.uploadToken}:a.$message.error("上传图片失败")}).catch(function(){a.$message.error("上传图片失败")})}return a.$message.error("上传图片大小不能超过 1MB!"),t}}}}});
//# sourceMappingURL=4.86bf8760a56635c920df.js.map