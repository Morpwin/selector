(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f5f4a2"],{"6e3e":function(t,e,n){"use strict";var o=n("cdf6"),a=n.n(o);a.a},"9b3a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addItem"},[n("div",{staticClass:"mask"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.obj.tip,expression:"obj.tip"}],attrs:{type:"text",maxlength:"20",placeholder:"请输入标题"},domProps:{value:t.obj.tip},on:{input:function(e){e.target.composing||t.$set(t.obj,"tip",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.obj.content,expression:"obj.content"}],attrs:{type:"text",maxlength:"20",placeholder:"请输入内容"},domProps:{value:t.obj.content},on:{input:function(e){e.target.composing||t.$set(t.obj,"content",e.target.value)}}}),n("div",{staticClass:"btn"},[n("router-link",{attrs:{tag:"button",to:"/item"},nativeOn:{click:function(e){return t.realy()}}},[t._v("确定")]),n("router-link",{attrs:{tag:"button",to:"/item"}},[t._v("取消")])],1)])])},a=[],i={name:"AddItem",data:function(){return{obj:{tip:"",content:""}}},methods:{realy:function(){this.$store.dispatch("addItem",this.obj)}}},s=i,r=(n("6e3e"),n("2877")),c=Object(r["a"])(s,o,a,!1,null,"9281df80",null);e["default"]=c.exports},cdf6:function(t,e,n){}}]);