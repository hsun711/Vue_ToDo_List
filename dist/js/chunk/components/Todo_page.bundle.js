(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("EachTask")],1)};n._withStripped=!0;var s=i(2),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"eachTask"}},[i("div",{staticClass:"titleMenu"},[i("h1",[t._v(t._s("Done"===this.$route.query.name?"完成項目":"待辦項目")+" : ")]),t._v(" "),t.taskList.length>0?i("div",{staticClass:"multiEdit"},[i("div",{on:{click:t.openMultiEditMenu}},[i("i",{staticClass:"barIcon fa-solid fa-ellipsis-vertical"})]),t._v(" "),i("div",{class:[this.isOpen?"active":"editBtn"]},["Done"!==this.$route.query.name?i("div",{staticClass:"active-item",on:{click:t.chooseItem}},[i("i",{staticClass:"fa-solid fa-pen"}),t._v(" 編輯多個項目\n                ")]):t._e(),t._v(" "),"Done"===this.$route.query.name?i("div",{staticClass:"active-item",on:{click:t.chooseItem}},[i("i",{staticClass:"fa-solid fa-trash-can"}),t._v(" 刪除多個項目\n                ")]):t._e()])]):t._e()]),t._v(" "),i("div",{staticClass:"itemTag"},[i("ul",t._l(t.formatItemTag,(function(e){return i("li",{key:e.tagName,staticClass:"tagArr",class:{active:e.isActive},on:{click:function(i){return t.changeTag(e)}}},[t._v("\n                "+t._s(e.tagName)+"\n            ")])})),0)]),t._v(" "),i("div",{staticClass:"taskList"},[i("ul",{attrs:{id:"infiniteList"}},t._l(t.taskList,(function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.isShow&&e.isTag,expression:"isShow && item.isTag"}],key:e.id},[t.isCheck?i("input",{directives:[{name:"model",rawName:"v-model",value:t.checkItem,expression:"checkItem"}],staticClass:"checkitem",attrs:{type:"checkbox",name:"checkInput"},domProps:{value:e.id,checked:Array.isArray(t.checkItem)?t._i(t.checkItem,e.id)>-1:t.checkItem},on:{change:function(i){var n=t.checkItem,s=i.target,r=!!s.checked;if(Array.isArray(n)){var a=e.id,c=t._i(n,a);s.checked?c<0&&(t.checkItem=n.concat([a])):c>-1&&(t.checkItem=n.slice(0,c).concat(n.slice(c+1)))}else t.checkItem=r}}}):t._e(),t._v(" "),i("div",{staticClass:"checked",class:t.type[""+e.taskType]},[i("div",{staticClass:"taskText"},[i("div",{staticClass:"taskTitle"},[i("h4",{class:{exp:e.isToday,doneStyle:e.isDone},on:{click:function(i){return t.turnDone(e.id)}}},[t._v("\n                                "+t._s(e.taskName)+"\n                            ")]),t._v(" "),e.time<t.now-864e5&&!1===e.isDone?i("h6",{staticStyle:{color:"red"}},[t._v("\n                                做完了沒～已經過期囉！\n                            ")]):t._e()]),t._v(" "),i("div",{staticClass:"itemTag"},[i("ul",t._l(e.taskTag,(function(e,n){return i("li",{key:n,class:{active:t.selectTag.includes(e)}},[t._v("\n                                    "+t._s(e)+"\n                                ")])})),0)])]),t._v(" "),i("div",{staticClass:"editArea"},[i("p",[t._v(t._s(e.expDate))]),t._v(" "),i("div",{staticClass:"editMenu"},[i("div",{staticClass:"dotMenu",on:{click:function(i){return t.openMenu(e)}}},[i("i",{staticClass:"icon fa-solid fa-ellipsis-vertical fa-xl"})]),t._v(" "),i("div",{class:[e.id===t.itemid?"active":"editBtn"]},[i("router-link",{staticClass:"active-item",attrs:{to:{name:"Add_page",query:{name:e.id}}}},[i("i",{staticClass:"fa-solid fa-pen"}),t._v(" 編輯\n                                ")]),t._v(" "),i("div",{staticClass:"active-item",on:{click:function(i){return t.removeTask(e.id)}}},[i("i",{staticClass:"fa-solid fa-trash-can"}),t._v(" 刪除\n                                ")])],1)])])])])})),0)]),t._v(" "),i("div",{staticClass:"addtodoBtn"},[t.isCheck?i("div",{staticClass:"cancleBtn",on:{click:t.cancle}},[t._v("\n            取消\n        ")]):t._e(),t._v(" "),t.isCheck?i("div",{staticClass:"addBtn",on:{click:t.submit}},[t._v("\n            選擇\n        ")]):t._e()])])};r._withStripped=!0;var a=i(0),c=i.n(a),o=i(10),u=i(3),l=i.n(u);function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p={data:function(){return{isShow:!0,isExp:!1,itemid:"",isOpen:!1,isCheck:!1,now:c()().valueOf(),checkItem:[],type:{work:"work",home:"home",friend:"friend",other:"other"}}},watch:{},computed:h(h({},Object(s.c)(["itemsID","otherItemsID","itemsNotDone","itemsDone","selectTag","getDoneItemTag","getNotDoneItemTag"])),{},{taskList:function(){var t=this,e=[];switch(this.$route.query.name?this.$route.query.name:""){case"":case"Todo":e=this.itemsNotDone;break;case"Done":e=this.itemsDone}var i=c()().format("YYYY-MM-DD"),n=e.map((function(e){var n=JSON.parse(JSON.stringify(e)),s=JSON.parse(JSON.stringify(t.selectTag)),r=new Date(n.expDate).getTime();return n.isToday=n.expDate===i,n.taskTag=n.taskTag.split(","),n.time=r,0===s.length?n.isTag=!0:s.map((function(t){return n.taskTag.includes(t)&&(n.isTag=!0),n})),n}));return n.sort((function(t,e){return t.time-e.time})),n},formatItemTag:function(){var t=JSON.parse(JSON.stringify(this.getDoneItemTag)),e=JSON.parse(JSON.stringify(this.getNotDoneItemTag));return"Done"===this.$route.query.name?(this.$store.state.selectTag=[],t.map((function(t){return{tagName:t,isActive:!1}}))):(this.$store.state.selectTag=[],e.map((function(t){return{tagName:t,isActive:!1}})))}}),mounted:function(){this.getTodoList()},methods:h(h(h({},Object(s.b)({getTodoList:"getTodoList"})),Object(s.d)({})),{},{turnDone:function(t){var e=this.itemsID(t);e[0].isDone=!e[0].isDone,!0===e[0].isDone?l.a.fire("移至完成項目頁面"):l.a.fire("移至待辦項目頁面");var i=[].concat(m(this.otherItemsID(t)),m(e));o.b.set("todos",JSON.stringify(i))},removeTask:function(t){var e=this,i=[];i.push(t),l.a.fire({title:"確定要刪除嗎?",text:"刪掉就回不來了喔!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(t){t.isConfirmed?(l.a.fire("已刪除!"),e.$store.commit("removeTask",i),e.itemid=""):e.itemid=""}))},changeTag:function(t){this.$store.commit("chooseTag",t.tagName),t.isActive=!t.isActive},openMenu:function(t){""===this.itemid?this.itemid=t.id:this.itemid=""},openMultiEditMenu:function(){this.isOpen=!this.isOpen},chooseItem:function(){this.isCheck=!this.isCheck,this.isOpen=!1},cancle:function(){this.isCheck=!1},submit:function(){var t=this;if("Done"!==this.$route.query.name)this.$store.commit("editTodoList",this.checkItem),window.location.href="#/Add?name=edit";else{var e=JSON.parse(JSON.stringify(this.checkItem));l.a.fire({title:"確定要刪除嗎?",text:"刪掉就回不來了喔!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(i){i.isConfirmed?(l.a.fire("已刪除!"),t.$store.commit("removeTask",e),t.isCheck=!1):(t.checkItem=[],t.isCheck=!1)}))}}})},g=i(8),k=Object(g.a)(p,r,[],!1,null,"5e9260a8",null);function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){O(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function O(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}k.options.__file="components/Todo_page/EachTask.vue";var _={components:{EachTask:k.exports},filters:{},props:{},data:function(){return{}},computed:b({},Object(s.c)([])),watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},methods:b(b({},Object(s.b)({})),Object(s.d)({}))},T=Object(g.a)(_,n,[],!1,null,"76563aca",null);T.options.__file="components/Todo_page/main.vue";e.default=T.exports}}]);