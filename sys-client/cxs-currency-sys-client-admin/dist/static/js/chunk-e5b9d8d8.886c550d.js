(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5b9d8d8"],{"3f7f":function(e,t,n){"use strict";n("a56a")},"5fe2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddType}},[e._v("创建新类型")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.pointRechargeTypeList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"类型id",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"充值积分",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.gold)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"原价",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.money)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"折扣",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(0===t.row.discount?void 0:t.row.discount)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"是否展示",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{disabled:"","active-color":"#13ce66","inactive-color":"#cccccc"},model:{value:t.row.shows,callback:function(n){e.$set(t.row,"shows",n)},expression:"scope.row.shows"}})]}}])}),n("el-table-column",{attrs:{align:"center",label:"描述",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.typeDesc?t.row.typeDesc.length>10?t.row.typeDesc.slice(0,10)+"...":t.row.typeDesc:"")+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑类型":"修改类型"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.type,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"充值积分"}},[n("el-input",{attrs:{type:"number",placeholder:"充值积分"},model:{value:e.type.gold,callback:function(t){e.$set(e.type,"gold",t)},expression:"type.gold"}})],1),n("el-form-item",{attrs:{label:"原价"}},[n("el-input-number",{attrs:{precision:2,controls:!1,placeholder:"原价"},model:{value:e.type.money,callback:function(t){e.$set(e.type,"money",t)},expression:"type.money"}})],1),n("el-form-item",{attrs:{label:"折扣"}},[n("el-input-number",{attrs:{precision:2,controls:!1,min:.1,max:10,placeholder:"折扣,折扣价=原价*折扣/10"},model:{value:e.type.discount,callback:function(t){e.$set(e.type,"discount",t)},expression:"type.discount"}})],1),n("el-form-item",{attrs:{label:"折扣价"}},[n("el-input",{attrs:{disabled:""},model:{value:e.qian,callback:function(t){e.qian=t},expression:"qian"}})],1),n("el-form-item",{attrs:{label:"是否展示"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#cccccc","active-text":"展示","inactive-text":"不展示"},model:{value:e.type.shows,callback:function(t){e.$set(e.type,"shows",t)},expression:"type.shows"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea",rows:2,resize:"none",placeholder:"描述"},model:{value:e.type.typeDesc,callback:function(t){e.$set(e.type,"typeDesc",t)},expression:"type.typeDesc"}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmType}},[e._v("确认")])],1)],1)],1)},a=[],o=n("c7eb"),c=n("1da1"),l=(n("14d9"),n("a434"),n("ed08")),s=n("8bd7"),r={id:null,gold:0,money:0,discount:10,shows:!0,typeDesc:""},d={name:"TradeType",data:function(){return{pointRechargeTypeList:[],listLoading:!0,dialogVisible:!1,dialogType:"new",type:Object.assign({},r),qian:0}},watch:{type:{deep:!0,immediate:!0,handler:function(e,t){if(e){var n=e.money,i=e.discount;this.qian=n&&i?n*i/10:n}}}},created:function(){this.init()},methods:{init:function(){var e=this;Object(s["a"])().then((function(t){e.listLoading=!1,e.pointRechargeTypeList=t.data}))},handleAddType:function(){this.type=Object.assign({},r),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){this.dialogType="edit",this.dialogVisible=!0,this.type=Object(l["c"])(e.row),0===this.type.discount&&(this.type.discount=void 0)},handleDelete:function(e){var t=this,n=e.$index,i=e.row;this.$confirm("确定要删除这个类型吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(i.id);case 2:t.pointRechargeTypeList.splice(n,1),t.$message({type:"success",message:"类型删除成功!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},confirmType:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n,i,a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="edit"===e.dialogType,!n){t.next=10;break}return t.next=4,Object(s["d"])(e.type);case 4:e.$message.success("类型修改成功"),e.dialogVisible=!1,e.type=Object(l["c"])(r),e.init(),t.next=20;break;case 10:return e.type.id=void 0,t.next=13,Object(s["d"])(e.type);case 13:i=t.sent,a=i.data,e.pointRechargeTypeList.push(a),e.$message.success("类型添加成功"),e.dialogVisible=!1,e.type=Object(l["c"])(r),e.init();case 20:case"end":return t.stop()}}),t)})))()}}},u=d,p=(n("3f7f"),n("2877")),y=Object(p["a"])(u,i,a,!1,null,"65ba71af",null);t["default"]=y.exports},"8bd7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s}));var i=n("b775"),a=n("da71");function o(){return Object(i["a"])({url:a["a"]+"/admin/rechangeType/getPointRechargeTypeList",method:"get"})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:a["a"]+"/admin/rechangeType/saveOrPointRechargeType",method:"post",data:e})}function l(e){return Object(i["a"])({url:a["a"]+"/admin/rechangeType/removePointRechargeType/".concat(e),method:"delete"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:a["a"]+"/admin/tradeOrder/getPointTradeOrderList",method:"post",data:e})}},a56a:function(e,t,n){}}]);