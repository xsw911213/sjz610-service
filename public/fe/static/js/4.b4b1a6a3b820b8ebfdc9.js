webpackJsonp([4],{"2szi":function(t,s,i){t.exports=i.p+"static/img/living-dom.1eaf948.png"},hh9T:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{list0609:[{time:"9：30",text:"第五届石家庄旅游交易会启动仪式及巡馆",value:0},{time:"10：30",text:"《全民导游》颁奖典礼",value:1},{time:"10：50",text:"第五届石家庄旅游交易会重点项目发布暨签约仪式",value:2},{time:"14：30",text:"2018中国·石家庄“互联网+旅游”特色小镇峰会",value:3},{time:"17：30",text:"市领导会见重要嘉宾及外宾",value:4},{time:"18：30",text:"推介餐叙会",value:5},{time:"20：00",text:"第二届石家庄市旅游产业发展大会开幕式",value:6},{time:"20：40",text:"大型实景剧《遇见·鹿泉》演出",value:7}],list0610:[{time:"08：00",text:"旅游项目线路观摩",value:8}],list0611:[{time:"9：30",text:"石家庄市创建全域旅游示范区工作推进会",value:9},{time:"14：30",text:"第二届庄里外休闲活动颁奖仪式",value:10}],width:"",_width:"",height:"",_height:"",translateX:0,otranslateX:0,translateY:0,otranslateY:0}},methods:{e:function(t){t.preventDefault()},getMsg:function(){var t=this;this.axios({method:"get",url:"/livingmsg",params:{meeting:5},baseURL:this.host.baseUrl}).then(function(s){t.livingMsg=s.data.data})},goDetail:function(t){console.log(t),this.$router.push({path:"/livingdetail",query:{meeting:t}})},scaleimg:function(t){var s=void 0;s=t.scale>1?1+.01*t.scale:1===t.scale?1:1-.03*t.scale,this.width=this.width*s,this.height=this.height*s,this.width<this._width&&(this.width=this._width,this.height=this._height);var i=(this.width-this._width)/2,a=(this.height-this._height)/2;this.translateX=0-i,this.otranslateX=0-i,this.translateY=0-a,this.otranslateY=0-a},translate:function(t){console.log(t);var s=t.deltaX,i=t.deltaY;this.width<=this._width?(s=0,i=0):0===this.translateX&&0===this.translateY||(s=this.otranslateX+s,i=this.otranslateY+i),console.log(this.otranslateX,this.otranslateY,s,i),this.translateX=s,this.translateY=i},translateEnd:function(){this.otranslateX=this.translateX,this.otranslateY=this.translateY}},mounted:function(){var t=document.getElementById("living-map");this.height=t.offsetHeight,this.width=t.offsetWidth,this._height=t.offsetHeight,this._width=t.offsetWidth}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"living"}},[a("div",{staticClass:"mask"}),t._v(" "),a("div",{staticClass:"msg"},[a("p",{staticClass:"title"},[t._v("现场直播")]),t._v(" "),a("div",{staticClass:"meetings"},[a("img",{staticClass:"dom",attrs:{src:i("2szi"),alt:""},on:{click:t.e}}),t._v(" "),a("p",{staticClass:"date"},[t._v("6月9日")]),t._v(" "),t._l(t.list0609,function(s,i){return a("p",{key:i,staticClass:"item"},[a("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("span",{staticClass:"play"}),t._v(" "),a("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])}),t._v(" "),a("p",{staticClass:"date"},[t._v("6月10日")]),t._v(" "),t._l(t.list0610,function(s,i){return a("p",{key:i+10,staticClass:"item"},[a("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("span",{staticClass:"play"}),t._v(" "),a("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])}),t._v(" "),a("p",{staticClass:"date"},[t._v("6月11日")]),t._v(" "),t._l(t.list0611,function(s,i){return a("p",{key:i+100,staticClass:"item"},[a("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),a("span",{staticClass:"play"}),t._v(" "),a("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])})],2),t._v(" "),a("p",{staticClass:"title",staticStyle:{"margin-top":"40px"}},[t._v("会场地图")]),t._v(" "),a("v-touch",{staticClass:"map",on:{pinch:t.scaleimg,pan:t.translate,panend:t.translateEnd}},[a("img",{style:"width:"+t.width+"px;height:"+t.height+"px;transform:translate("+t.translateX+"px,"+t.translateY+"px)",attrs:{id:"living-map",src:i("pQw2"),alt:""},on:{click:t.e}})])],1)])},staticRenderFns:[]};var l=i("VU/8")(a,e,!1,function(t){i("lmbg")},null,null);s.default=l.exports},lmbg:function(t,s){},pQw2:function(t,s,i){t.exports=i.p+"static/img/meeting-map.9e2566b.jpg"}});
//# sourceMappingURL=4.b4b1a6a3b820b8ebfdc9.js.map