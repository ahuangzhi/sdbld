(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc690f42"],{"5e12":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"tenant_admin_manage"}},[e("el-header",{staticClass:"tenant_admin_search"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content bg-purple-dark"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:10}},[e("div",[e("el-input",{staticClass:"search_input",attrs:{placeholder:"请输入租户管理员信息",clearable:""},model:{value:t.search_name,callback:function(a){t.search_name=a},expression:"search_name"}})],1)]),e("el-col",{attrs:{span:1.5}},[e("el-button",{staticClass:"spacing20",attrs:{type:"primary",icon:"el-icon-search",round:""},on:{click:t.search_tenant_admin}},[t._v("租户管理员搜索")])],1),e("el-col",{attrs:{span:1.5}},[e("el-button",{staticClass:"spacing20",attrs:{round:"",icon:"el-icon-plus"},on:{click:function(a){t.add_tenant_admin_drawer=!0}}},[t._v("添加新租户管理员")])],1)],1)],1)])],1)],1),e("el-main",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.table_data}},[e("el-table-column",{attrs:{label:"名称",prop:"name"}}),e("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.info_tenant_admin(a.row)}}},[t._v("详情 ")]),e("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},on:{click:function(e){return t.del_tenant_admin(a.row.id)}},slot:"reference"},[t._v("删除")])]}}])})],1)],1),e("el-drawer",{attrs:{size:"70%",title:"添加新租户管理员","custom-class":"drawer_class",visible:t.add_tenant_admin_drawer,direction:t.direction},on:{"update:visible":function(a){t.add_tenant_admin_drawer=a}}},[e("el-form",{ref:"add_tenant_admin_data",staticClass:"add_from",attrs:{"status-icon":"",model:t.add_tenant_admin_data,rules:t.add_tenant_admin_rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[e("el-input",{model:{value:t.add_tenant_admin_data.email,callback:function(a){t.$set(t.add_tenant_admin_data,"email",a)},expression:"add_tenant_admin_data.email"}})],1),e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{model:{value:t.add_tenant_admin_data.lastName,callback:function(a){t.$set(t.add_tenant_admin_data,"lastName",a)},expression:"add_tenant_admin_data.lastName"}})],1),e("el-form-item",{attrs:{label:"名字"}},[e("el-input",{model:{value:t.add_tenant_admin_data.firstName,callback:function(a){t.$set(t.add_tenant_admin_data,"firstName",a)},expression:"add_tenant_admin_data.firstName"}})],1),e("el-form-item",{attrs:{label:"详情"}},[e("el-input",{model:{value:t.add_tenant_admin_data.description,callback:function(a){t.$set(t.add_tenant_admin_data,"description",a)},expression:"add_tenant_admin_data.description"}})],1),e("el-form-item",{attrs:{label:"激活邮件"}},[e("el-switch",{model:{value:t.add_tenant_admin_data.sendActivationMail,callback:function(a){t.$set(t.add_tenant_admin_data,"sendActivationMail",a)},expression:"add_tenant_admin_data.sendActivationMail"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.add_tenant_admin}},[t._v("立即创建")]),e("el-button",{on:{click:function(a){t.add_tenant_admin_drawer=!1}}},[t._v("取消")])],1)],1)],1),e("el-drawer",{attrs:{title:"详细信息","custom-class":"drawer_class",direction:t.direction,visible:t.tenant_admin_info_drawer,size:"70%"},on:{"update:visible":function(a){t.tenant_admin_info_drawer=a}}},[t.update_mode?e("el-form",{ref:"update_tenant_admin_data",staticClass:"add_from",attrs:{"status-icon":"",model:t.update_tenant_admin_data,rules:t.add_tenant_admin_rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[e("el-input",{model:{value:t.update_tenant_admin_data.email,callback:function(a){t.$set(t.update_tenant_admin_data,"email",a)},expression:"update_tenant_admin_data.email"}})],1),e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{model:{value:t.update_tenant_admin_data.lastName,callback:function(a){t.$set(t.update_tenant_admin_data,"lastName",a)},expression:"update_tenant_admin_data.lastName"}})],1),e("el-form-item",{attrs:{label:"名字"}},[e("el-input",{model:{value:t.update_tenant_admin_data.firstName,callback:function(a){t.$set(t.update_tenant_admin_data,"firstName",a)},expression:"update_tenant_admin_data.firstName"}})],1),e("el-form-item",{attrs:{label:"详情"}},[e("el-input",{model:{value:t.update_tenant_admin_data.additionalInfo.description,callback:function(a){t.$set(t.update_tenant_admin_data.additionalInfo,"description",a)},expression:"update_tenant_admin_data.additionalInfo.description"}})],1),e("el-form-item",[e("el-button",{staticClass:"show_button",on:{click:t.update_info}},[t._v("确认修改")])],1),e("el-form-item",[e("el-button",{staticClass:"show_button",attrs:{type:"primary"},on:{click:function(a){t.update_mode=!1}}},[t._v("取消修改")])],1)],1):t._e(),t.update_mode?t._e():e("div",[e("div",{staticClass:"show_list"},[t._l(t.show_table_data,(function(t){return[e("DataShowInput",{attrs:{data1:t}})]}))],2),e("div",{staticClass:"show_operate"},[e("el-button",{staticClass:"show_button",on:{click:function(a){t.update_mode=!0}}},[t._v("修改信息 ")]),e("el-button",{staticClass:"show_button",attrs:{type:"primary"},on:{click:function(a){return t.activation_url()}}},[t._v("激活链接 ")]),e("el-button",{staticClass:"show_button",attrs:{type:"primary"},on:{click:function(a){return t.activation_mail()}}},[t._v("激活邮件 ")]),e("el-button",{staticClass:"show_button",attrs:{slot:"reference",type:t.button_type},on:{click:t.modify_tenant_admin_status},slot:"reference"},[t._v(" "+t._s(t.status?"禁用用户":"启用用户")+" ")])],1)])],1)],1)},i=[],s=(e("a4d3"),e("e01a"),e("c975"),e("4d63"),e("ac1f"),e("25f0"),e("f040")),d=e("b775"),o="tenantAdmin/";function l(t){return Object(d["a"])({url:o+"addTenantAdmin.json",method:"post",data:t})}function r(t){return Object(d["a"])({url:o+"delTenantAdmin.json",method:"post",data:t})}function _(t){return Object(d["a"])({url:o+"updateTenantAdmin.json",method:"post",data:t})}function c(t){return Object(d["a"])({url:o+"getTenantAdminList.json",method:"post",data:t})}var u=e("f6b0"),m=function(t,a,e){var n=new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");e(n.test(a)?"":new Error("请输入正确邮箱格式"))},f={name:"tenantAdmin",components:{DataShowInput:s["a"]},data:function(){return{tenant_id:"",limit:50,search_name:"",table_data:[],add_tenant_admin_data:{email:"",lastName:"",firstName:"",description:"",sendActivationMail:!1},update_tenant_admin_data:"",add_tenant_admin_rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{validator:m,trigger:"blur"}]},show_table_data:"",tenant_admin_info_drawer:!1,add_tenant_admin_drawer:!1,direction:"rtl",button_type:"",status:"",update_mode:!1,loading:!1}},methods:{search_tenant_admin:function(){var t=this;this.loading=!0;var a=this,e={limit:this.limit,search:a.search_name,id:this.tenant_id};c(e).then((function(e){e.success?(a.table_data=e.data,t.add_tenant_admin_drawer=!1):t.$message({type:"warning",message:e.message}),t.loading=!1}))},info_tenant_admin:function(t){this.direction="rtl",this.tenant_admin_status(t),this.update_tenant_admin_data=t,this.button_type=this.status?"danger":"success";var a=t.additionalInfo;this.show_table_data=[{k:"邮箱",v:t.email},{k:"ID",v:t.id.id},{k:"说明",v:null==a||void 0===a?"":t.additionalInfo.description},{k:"姓",v:t.lastName},{k:"名",v:t.firstName}],this.tenant_admin_info_drawer=!0},del_tenant_admin:function(t){var a=this;this.$confirm("确定删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r({tbUserId:t.id}).then((function(t){t.success?(a.search_tenant_admin(),a.$message({type:"success",message:"删除成功!"})):a.$message({type:"warning",message:t.message})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},add_tenant_admin:function(){var t=this;this.$refs["add_tenant_admin_data"].validate((function(a){if(!a)return!1;l({email:t.add_tenant_admin_data.email,firstName:t.add_tenant_admin_data.firstName,lastName:t.add_tenant_admin_data.lastName,sendActivationMail:t.add_tenant_admin_data.sendActivationMail,tenantId:{id:t.tenant_id,entityType:"TENANT"},authority:"TENANT_ADMIN",additionalInfo:{description:t.add_tenant_admin_data.description}}).then((function(a){a.success?t.search_tenant_admin():t.$message({type:"info",message:a.message})}))}))},activation_mail:function(){alert("重新发送激活邮件")},modify_tenant_admin_status:function(){var t=this;Object(u["d"])({userId:this.show_table_data[1].v,status:!1===this.status}).then((function(a){a.success?(t.$message({type:"success",message:a.message}),t.status=!t.status,t.button_type=t.status?"danger":"success"):t.$message({type:"info",message:a.message})}))},tenant_admin_status:function(t){var a=t.additionalInfo;if(null==a||void 0===a)this.status=!0;else{var e=a.userCredentialsEnabled;this.status=!(!e&&!1===e)}},activation_url:function(){var t=this;Object(u["a"])(this.show_table_data[1].v).then((function(a){if(a.success){var e=a.data;t.$alert(null==e?"用户已激活":e,"激活链接",{confirmButtonText:"确定"})}else t.$message({type:"info",message:a.message})}))},update_info:function(){var t=this;this.$refs["update_tenant_admin_data"].validate((function(a){if(!a)return!1;_(t.update_tenant_admin_data).then((function(a){if(a.success){t.$message({type:"info",message:a.message});var e=a.data,n=e.additionalInfo;t.update_tenant_admin_data=e,t.show_table_data=[{k:"邮箱",v:e.email},{k:"ID",v:e.id.id},{k:"说明",v:null==n||void 0===n?"":e.additionalInfo.description},{k:"姓",v:e.lastName},{k:"名",v:e.firstName}],t.update_mode=!1}else t.$message({type:"info",message:a.message})}))}))}},created:function(){var t=window.location.href,a=t.indexOf("userId=");a<1?this.$message({type:"warning",message:"没有获取到您的查询客户ID"}):(this.tenant_id=t.substr(a+7),this.search_tenant_admin())}},p=f,v=e("2877"),b=Object(v["a"])(p,n,i,!1,null,"2dbca4a3",null);a["default"]=b.exports},f040:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return!1===t.data1.v||t.data1.v?e("div",{staticClass:"client_show_list_div",staticStyle:{margin:"0 auto .8rem auto","font-size":".4rem"}},[e("div",{staticClass:"client_show_list_div_header",staticStyle:{"margin-bottom":".2rem"}},[t._v(t._s(t.data1.k))]),e("div",{staticClass:"client_show_list_div_main"},[!0!==t.data1.v&&!1!==t.data1.v?e("el-input",{attrs:{disabled:!0},model:{value:t.data1.v,callback:function(a){t.$set(t.data1,"v",a)},expression:"data1.v"}}):t._e(),!0===t.data1.v||!1===t.data1.v?e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:!0},model:{value:t.data1.v,callback:function(a){t.$set(t.data1,"v",a)},expression:"data1.v"}}):t._e()],1)]):t._e()},i=[],s={name:"DataShowInput",props:["data1"]},d=s,o=e("2877"),l=Object(o["a"])(d,n,i,!1,null,"6bb89618",null);a["a"]=l.exports},f6b0:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return d})),e.d(a,"f",(function(){return o})),e.d(a,"d",(function(){return l})),e.d(a,"e",(function(){return r})),e.d(a,"a",(function(){return _}));var n=e("b775"),i="system/user/";function s(t){return Object(n["a"])({url:i+"addUserInfo.json",method:"post",data:t})}function d(t){return Object(n["a"])({url:i+"deleteUserInfo.json",method:"post",data:t})}function o(t){return Object(n["a"])({url:i+"updateUserInfo.json",method:"post",data:t})}function l(t){return Object(n["a"])({url:i+"modifyUserStatus.json",method:"post",data:t})}function r(t){return Object(n["a"])({url:i+"getUserListByCustomerId.json",method:"post",data:t})}function _(t){return Object(n["a"])({url:i+"getUrl.json?userId="+t,method:"get"})}}}]);