"use strict";(self["webpackChunkcxs_currency_sys_client"]=self["webpackChunkcxs_currency_sys_client"]||[]).push([[874],{43874:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});a(28743);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-data"},[e("el-row",{staticClass:"data-row",attrs:{gutter:20}},[e("el-col",{attrs:{span:10}},[e("div",{staticClass:"grid-content bg-purple"},[t._v("文章标题")])]),e("el-col",{attrs:{span:5}},[e("div",{staticClass:"grid-content bg-purple"},[t._v("文章状态")])]),e("el-col",{attrs:{span:5}},[e("div",{staticClass:"grid-content bg-purple"},[t._v("文章评分")])]),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"grid-content bg-purple"},[t._v("操作")])])],1),t._l(t.dataBean.data,(function(a,r){return t.dataBean?e("el-row",{key:a.id,staticClass:"data-item",attrs:{gutter:20}},[e("el-col",{attrs:{span:10}},[1===a.articleStatus?e("div",{staticClass:"grid-content bg-purple cursor",on:{click:function(e){return t.$router.push({name:"article-detail",params:{id:a.articleId}})}}},[e("el-link",{attrs:{underline:!1}},[t._v(" "+t._s(a.articleTitle)+" "),1===a.articleIsSelf?e("el-tag",{staticStyle:{"margin-left":"5px"},attrs:{type:"",size:"mini",effect:"plain"}},[t._v(" 原创 ")]):t._e()],1)],1):e("div",{staticClass:"grid-content bg-purple cursor"},[e("el-link",{attrs:{underline:!1}},[t._v(" "+t._s(a.articleTitle)+" "),1===a.articleIsSelf?e("el-tag",{staticStyle:{"margin-left":"5px"},attrs:{type:"",size:"mini",effect:"plain"}},[t._v(" 原创 ")]):t._e()],1)],1)]),e("el-col",{attrs:{span:5}},[e("div",{staticClass:"grid-content bg-purple"},[1===a.articleStatus?e("el-tag",{attrs:{size:"small",effect:"dark"}},[t._v(" 已通过 ")]):0===a.articleStatus?e("el-tag",{attrs:{type:"warning",size:"small",effect:"dark"}},[t._v(" 待审核 ")]):e("el-tag",{attrs:{title:a.articleDesc,size:"small",type:"danger",effect:"dark"}},[t._v(" 审核失败 ")])],1)]),e("el-col",{attrs:{span:5}},[e("div",{staticClass:"grid-content bg-purple"},[t._v(" "+t._s(a.articleRate)+" 分 ")])]),e("el-col",{attrs:{span:4}},[1===a.articleStatus?e("div",{staticClass:"grid-content bg-purple"},[e("el-button",{attrs:{slot:"reference",type:"primary",size:"small",title:"详情",icon:"el-icon-tickets",circle:""},on:{click:function(e){return t.detailHandle(a)}},slot:"reference"})],1):0===a.articleStatus||2===a.articleStatus?e("div",{staticClass:"grid-content bg-purple"},[e("el-button",{attrs:{slot:"reference",type:"primary",size:"small",title:"编辑",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.editHandle(a)}},slot:"reference"}),e("el-button",{attrs:{slot:"reference",type:"danger",size:"small",title:"删除",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.delHandle(a)}},slot:"reference"})],1):e("div",{staticClass:"grid-content bg-purple"},[e("el-button",{attrs:{slot:"reference",type:"danger",size:"small",title:"删除",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.delHandle(a)}},slot:"reference"})],1)])],1):t._e()})),e("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next","page-size":t.dataBean.pageSize,total:t.dataBean.total},on:{"current-change":t.handleCurrentChange}})],2)},n=[],i=a(92549),l=(a(4754),{name:"PushInfo",data(){return{dataBean:{},params:{pageNum:1,pageSize:10}}},mounted(){this.init()},methods:{init(){(0,i.KF)(this.params).then((t=>{this.dataBean=t.data}))},handleCurrentChange(t){this.params.pageNum=t,this.init()},detailHandle(t){this.$router.push({name:"article-detail",params:{id:t.articleId}})},editHandle(t){this.$router.push({name:"article-update",params:{id:t.articleId}})},delHandle(t){this.$confirm("确定删除这条博客吗?","删除博客",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((e=>{(0,i.P0)(t.articleId).then((t=>{this.$message.success("文章删除成功"),this.init()}))})).catch((t=>{console.error(t)}))}}}),c=l,s=a(81656),o=(0,s.A)(c,r,n,!1,null,"1caecbdb",null),u=o.exports},4754:function(t,e,a){a.d(e,{BJ:function(){return s},CS:function(){return p},I2:function(){return f},JR:function(){return i},KA:function(){return u},Nl:function(){return o},O:function(){return h},PX:function(){return g},lT:function(){return m},oc:function(){return c},ou:function(){return l},xE:function(){return d}});var r=a(52004),n=a(7277);function i(t={}){return(0,n.A)({url:r.f+"/article/saveOrUpdateDraft",method:"post",data:t})}function l(){return(0,n.A)({url:r.f+"/article/getArticleDraft",method:"get"})}function c(t={}){let e=new FormData;console.log(typeof t.file);for(let a in t)if("file"===a)t[a]&&Object.keys(t[a]).length>0&&e.append(a,t[a].raw);else if("tags"===a){if(t[a]&&t[a].length>0){const r=t[a].map((t=>t.tagId)).join(",");e.append(a,r)}}else e.append(a,t[a]);return(0,n.A)({url:r.f+"/article/saveOrUpdateArticle",method:"post",header:{"Content-type":"multipart/form-data"},data:e})}function s(t={}){return(0,n.A)({url:r.f+"/main/article/getArticleList",method:"post",data:t})}function o(t){return(0,n.A)({url:r.f+"/main/article/getArticleInfo",method:"get",params:{articleId:t}})}function u(t){return(0,n.A)({url:`${r.f}/article/getUpdateArticleInfo/${t}`,method:"get"})}function d(t){return(0,n.A)({url:r.f+"/main/article/readArticle",method:"get",params:{articleId:t}})}function p(t){return(0,n.A)({url:r.f+"/main/article/likeArticle",method:"get",params:{articleId:t}})}function f(t){return(0,n.A)({url:r.f+"/main/article/cancelLikeArticle",method:"get",params:{articleId:t}})}function g(t){return(0,n.A)({url:r.f+"/main/article/collectionArticle",method:"get",params:{articleId:t}})}function m(t){return(0,n.A)({url:r.f+"/main/article/cancelCollectionArticle",method:"get",params:{articleId:t}})}function h(t){return(0,n.A)({url:r.f+"/main/article/markArticleSearchLog",method:"get",params:{articleId:t}})}}}]);