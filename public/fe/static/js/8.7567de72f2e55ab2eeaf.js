webpackJsonp([8],{QYAS:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"map",data:function(){return{addressListShow:!1,point:{xbcq:{lan:114.301291,lat:38.029718},sjzxy:{lan:114.60936,lat:38.026544}}}},methods:{initBaiDuMap:function(t){var a=this,e=new BMap.Point(t.lan,t.lat);(new BMap.Geolocation).getCurrentPosition(function(t){if(this.getStatus()==BMAP_STATUS_SUCCESS){var n=new BMap.Map("rmap");n.centerAndZoom(e,12),new BMap.DrivingRoute(n,{renderOptions:{map:n,autoViewport:!0}}).search(new BMap.Point(t.point.lng,t.point.lat),e);var i=document.getElementsByTagName("body")[0],s=document.getElementsByTagName("iframe")[0];console.log(i),i.removeChild(s),a.addressListShow=!1}else alert("failed"+this.getStatus())})},changeMap:function(t){this.initBaiDuMap(this.point[t])}},mounted:function(){this.initBaiDuMap(this.point.xbcq)}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"map"}},[e("div",{attrs:{id:"rmap"}}),t._v(" "),e("a",{staticClass:"showotherplace",on:{click:function(a){t.addressListShow=!0}}},[t._v("所有会场地址")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.addressListShow,expression:"addressListShow"}],staticClass:"address-list",on:{click:function(a){if(a.target!==a.currentTarget)return null;t.addressListShow=!1}}},[e("a",{staticClass:"address",on:{click:function(a){t.changeMap("xbcq")}}},[t._v("西部长青")]),t._v(" "),e("a",{staticClass:"address",on:{click:function(a){t.changeMap("sjzxy")}}},[t._v("石家庄学院")])])])},staticRenderFns:[]};var s=e("VU/8")(n,i,!1,function(t){e("UVy6")},null,null);a.default=s.exports},UVy6:function(t,a){}});
//# sourceMappingURL=8.7567de72f2e55ab2eeaf.js.map