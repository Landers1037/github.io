(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d9ff791"],{"54b1":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"overview"},[e("h2",[t._v("总览")]),e("div",{staticStyle:{"max-width":"960px",margin:"20px auto 0"}},[e("el-row",{staticStyle:{"margin-left":"0","margin-right":"0"},attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,md:12,lg:12}},[e("div",{staticClass:"grid-content"},[e("p",{staticStyle:{color:"#9f9f9f"}},[t._v("总体架构")]),e("img",{attrs:{src:s("7456")}})])]),e("el-col",{attrs:{xs:24,md:12,lg:12}},[e("div",{staticClass:"grid-content"},[e("p",{staticStyle:{color:"#9f9f9f"}},[t._v("邮件服务")]),e("img",{attrs:{src:s("e081")}})])])],1),e("p",{staticStyle:{color:"#9f9f9f","margin-top":"40px","margin-bottom":"20px"}},[t._v("查看部分redis缓存是否命中")]),e("el-button",{attrs:{round:""},on:{click:t.test}},[t._v("Test Redis")]),e("el-dialog",{staticClass:"dg",attrs:{title:"缓存测试",visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("span",[t._v("测试文章pin")]),e("p",[e("span",[t._v("缓存测试结果: ")]),e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.hit))])]),e("p",[t._v("自定义测试: /api/sys/checkredis?name="),e("span",{staticStyle:{color:"#4bff67"}},[t._v("文章地址")])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)])},a=[],o={name:"overview",data(){return{dialogVisible:!1,hit:""}},methods:{test(){this.$http.get("/api/sys/checkredis",{params:{name:"pin"}}).then(t=>{this.hit=t.data,this.dialogVisible=!0}).catch(t=>{this.hit="error"})}}},r=o,l=(s("d95a"),s("2877")),n=Object(l["a"])(r,e,a,!1,null,"6b200b01",null);i["default"]=n.exports},7456:function(t,i,s){t.exports=s.p+"img/server.b03c657b.webp"},d95a:function(t,i,s){"use strict";var e=s("ea54"),a=s.n(e);a.a},e081:function(t,i,s){t.exports=s.p+"img/mail.d6bd009c.webp"},ea54:function(t,i,s){}}]);