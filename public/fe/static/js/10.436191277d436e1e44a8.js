webpackJsonp([10],{"54gc":function(t,e){},E2Qg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{modelName:"留言板",titlePlaceholder:"请输入标题(必填)",textareaPlaceholder:"内容不少于20字，请尽量叙述清晰，简明扼要。",btnText:"提交留言",title:"",msg:"",english:!1}},computed:{submitDisable:function(){return!(this.title.length>0&&this.msg.length>=20)},spanText:function(){var t="(还差"+(20-this.msg.length)+"字)";return this.english&&(t="(still worse "+(20-this.msg.length)+" letters)"),t}},methods:{e:function(t){t.preventDefault()},submit:function(){var t=this;this.submitDisable?console.log(111):this.axios({method:"post",url:"/msg",data:{title:this.title,msg:this.msg},baseURL:this.host.baseUrl}).then(function(e){console.log(e),t.title="",t.msg="",alert("提交成功")})}},mounted:function(){this.title="",this.msg="","en"===this.$route.query.lang&&(this.english=!0,this.modelName="Message board",this.titlePlaceholder="Please enter a title (required)",this.textareaPlaceholder="The content is not less than 20 words. Please try to make it clear and concise.",this.btnText="Submit")}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"msg"}},[i("img",{staticClass:"head",attrs:{src:s("qP5I"),alt:""},on:{click:t.e}}),t._v(" "),i("p",{staticClass:"model-name"},[t._v(t._s(t.modelName))]),t._v(" "),i("div",{staticClass:"form"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:t.titlePlaceholder},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{placeholder:t.textareaPlaceholder},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),i("p",[i("span",[t._v(t._s(t.msg.length))]),t._v("/1000"),t.msg.length<20?i("span",{staticClass:"gray"},[t._v(t._s(t.spanText))]):t._e()]),t._v(" "),i("a",{class:"submit "+(t.submitDisable?"disable":""),on:{click:t.submit}},[t._v(t._s(t.btnText))])])])},staticRenderFns:[]};var l=s("VU/8")(i,a,!1,function(t){s("54gc")},null,null);e.default=l.exports},qP5I:function(t,e,s){t.exports=s.p+"static/img/msg.c373e09.jpg"}});
//# sourceMappingURL=10.436191277d436e1e44a8.js.map