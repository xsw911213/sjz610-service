webpackJsonp([5],{"2szi":function(t,s,i){t.exports=i.p+"static/img/living-dom.1eaf948.png"},Ehcc:function(t,s){},hh9T:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{title1:"现场直播",title2:"会场地图",title3:"视频直播",title4:"文件下载",videoText:"视频直播地址：",videoText2:"（长按地址，并将其复制到浏览器中进行查看）",list0609:[{time:"9：30",text:"第五届石家庄旅游交易会启动仪式及巡馆",value:0},{time:"10：30",text:"《全民导游》颁奖典礼",value:1},{time:"10：50",text:"第五届石家庄旅游交易会重点项目发布暨签约仪式",value:2},{time:"14：30",text:"2018中国·石家庄“互联网+旅游”特色小镇峰会",value:3},{time:"17：30",text:"市领导会见重要嘉宾及外宾",value:4},{time:"18：30",text:"推介餐叙会",value:5},{time:"20：00",text:"第二届石家庄市旅游产业发展大会开幕式",value:6},{time:"20：40",text:"大型实景剧《遇见·鹿泉》演出",value:7}],list0610:[{time:"08：00",text:"旅游项目观摩",value:8}],list0611:[{time:"9：30",text:"石家庄市创建全域旅游示范区工作推进会",value:9},{time:"14：30",text:"第二届庄里外休闲活动颁奖仪式",value:10}],width:"",_width:"",height:"",_height:"",translateX:0,otranslateX:0,translateY:0,otranslateY:0,english:!1}},methods:{e:function(t){t.preventDefault()},getMsg:function(){var t=this;this.axios({method:"get",url:"/livingmsg",params:{meeting:5},baseURL:this.host.baseUrl}).then(function(s){t.livingMsg=s.data.data})},goDetail:function(t){console.log(t),this.$router.push({path:"/livingdetail",query:{meeting:t}})},scaleimg:function(t){var s=void 0;s=t.scale>1?1+.01*t.scale:1===t.scale?1:1-.03*t.scale,this.width=this.width*s,this.height=this.height*s,this.width<this._width&&(this.width=this._width,this.height=this._height);var i=(this.width-this._width)/2,e=(this.height-this._height)/2;this.translateX=0-i,this.otranslateX=0-i,this.translateY=0-e,this.otranslateY=0-e},translate:function(t){console.log(t);var s=t.deltaX,i=t.deltaY;this.width<=this._width?(s=0,i=0):0===this.translateX&&0===this.translateY||(s=this.otranslateX+s,i=this.otranslateY+i),console.log(this.otranslateX,this.otranslateY,s,i),this.translateX=s,this.translateY=i},translateEnd:function(){this.otranslateX=this.translateX,this.otranslateY=this.translateY}},mounted:function(){var t=document.getElementById("living-map");this.height=t.offsetHeight,this.width=t.offsetWidth,this._height=t.offsetHeight,this._width=t.offsetWidth,"en"===this.$route.query.lang&&(this.english=!0,this.title1="Live",this.title2="Conference site map",this.title3="Live broadcast",this.title4="Download Document",this.videoText="Live video address:",this.videoText2="(Long press the address and copy it to your browser for viewing)")}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"living"}},[e("div",{staticClass:"mask"}),t._v(" "),e("div",{staticClass:"msg"},[e("p",{staticClass:"title"},[t._v(t._s(t.title1))]),t._v(" "),e("div",{staticClass:"meetings"},[e("img",{staticClass:"dom",attrs:{src:i("2szi"),alt:""},on:{click:t.e}}),t._v(" "),e("p",{staticClass:"date"},[t._v("6-09")]),t._v(" "),t._l(t.list0609,function(s,i){return e("p",{key:i,staticClass:"item"},[e("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),e("span",{staticClass:"play"}),t._v(" "),e("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])}),t._v(" "),e("p",{staticClass:"date"},[t._v("6-10")]),t._v(" "),t._l(t.list0610,function(s,i){return e("p",{key:i+10,staticClass:"item"},[e("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),e("span",{staticClass:"play"}),t._v(" "),e("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])}),t._v(" "),e("p",{staticClass:"date"},[t._v("6-11")]),t._v(" "),t._l(t.list0611,function(s,i){return e("p",{key:i+100,staticClass:"item"},[e("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),e("span",{staticClass:"play"}),t._v(" "),e("span",{staticClass:"text",on:{click:function(i){t.goDetail(s.value)}}},[t._v(t._s(s.text))])])})],2),t._v(" "),e("p",{staticClass:"title",staticStyle:{"margin-top":"40px"}},[t._v(t._s(t.title3))]),t._v(" "),e("div",{staticClass:"meetings"},[e("p",{staticClass:"video-address"},[t._v(t._s(t.videoText))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"video-address http"},[t._v("http://play.yunxi.tv/livestream/flash?id=d84f8a8280a642d4b599b4659a0593bc")]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"video-address"},[t._v(t._s(t.videoText2))])]),t._v(" "),e("p",{staticClass:"title",staticStyle:{"margin-top":"40px"}},[t._v(t._s(t.title2))]),t._v(" "),e("v-touch",{staticClass:"map",on:{pinch:t.scaleimg,pan:t.translate,panend:t.translateEnd}},[e("img",{style:"width:"+t.width+"px;height:"+t.height+"px;transform:translate("+t.translateX+"px,"+t.translateY+"px)",attrs:{id:"living-map",src:i("pQw2"),alt:""},on:{click:t.e}})])],1)])},staticRenderFns:[]};var l=i("VU/8")(e,a,!1,function(t){i("Ehcc")},null,null);s.default=l.exports},pQw2:function(t,s,i){t.exports=i.p+"static/img/meeting-map.9e2566b.jpg"}});
//# sourceMappingURL=5.342442857105293dca79.js.map