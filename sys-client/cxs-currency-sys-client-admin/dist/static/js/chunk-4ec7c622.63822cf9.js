(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec7c622"],{"30b7":function(e,t,o){"use strict";o("920f")},7913:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"components-container"},[o("pan-thumb",{attrs:{image:e.image}}),o("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v(" Change Avatar ")]),o("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"https://httpbin.org/post","lang-type":"en"},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1)},c=[],r=o("896b"),i=o("3cbc"),p={name:"AvatarUploadDemo",components:{ImageCropper:r["a"],PanThumb:i["a"]},data:function(){return{imagecropperShow:!1,imagecropperKey:0,image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},methods:{cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1,this.image=e.files.avatar},close:function(){this.imagecropperShow=!1}}},n=p,s=(o("30b7"),o("2877")),m=Object(s["a"])(n,a,c,!1,null,"f1166bc8",null);t["default"]=m.exports},"920f":function(e,t,o){}}]);