(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"addPage"}},[e("add-task-container",{on:{"input-data-change":this.getStatus}})],1)};n._withStripped=!0;var a=i(2),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"addPage"}},[i("h1",[t._v(t._s("Add"===this.routeName?"新增項目":"修改項目")+"：")]),t._v(" "),t._l(t.addTodoList,(function(e,n){return i("div",{key:n,staticClass:"addTask",class:t.type[""+e.taskType]},[t.route?i("div",{staticClass:"taskState"},[i("h6",{class:[!0===e.isDone?"ok":"notyet"]},[t._v("項目狀態："+t._s(!0===e.isDone?"已完成":"未完成"))])]):t._e(),t._v(" "),i("AddTask",{attrs:{item:e,index:n},on:{remove:t.removeTodo,"change-item":t.changeItem}})],1)})),t._v(" "),i("div",{staticClass:"addtodoBtn"},["Add"===this.routeName?i("div",{staticClass:"addBtn",on:{click:t.addTask}},[t._v("\n            新增一筆\n        ")]):t._e(),t._v(" "),i("div",{staticClass:"saveBtn",on:{click:t.sendTodos}},[t._v("\n            儲存\n        ")])])],2)};r._withStripped=!0;var s=i(3),o=i.n(s),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"task"},[i("label",{attrs:{for:"task"}},[t._v("項目名稱：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputItem.taskName,expression:"inputItem.taskName"}],attrs:{id:"task",type:"text",name:"task"},domProps:{value:t.inputItem.taskName},on:{input:function(e){e.target.composing||t.$set(t.inputItem,"taskName",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"taskType"},[i("form",{attrs:{action:"get"}},[i("span",[t._v("任務分類：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.inputItem.taskType,expression:"inputItem.taskType"}],attrs:{id:"type",name:"type"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.inputItem,"taskType",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("\n                    請選擇\n                ")]),t._v(" "),i("option",{attrs:{value:"work"}},[t._v("\n                    工作\n                ")]),t._v(" "),i("option",{attrs:{value:"home"}},[t._v("\n                    家事\n                ")]),t._v(" "),i("option",{attrs:{value:"friend"}},[t._v("\n                    社交\n                ")]),t._v(" "),i("option",{attrs:{value:"other"}},[t._v("\n                    其他\n                ")])])])]),t._v(" "),i("div",{staticClass:"taskDate"},[i("span",[t._v("完成日期：")]),t._v(" "),i("date-picker",{staticClass:"datePicker",attrs:{placeholder:"完成日期","value-type":"format"},model:{value:t.inputItem.expDate,callback:function(e){t.$set(t.inputItem,"expDate",e)},expression:"inputItem.expDate"}},[t._v("\n            "+t._s(""+t.inputItem.expDate)+"\n        ")])],1),t._v(" "),i("div",{staticClass:"taskTag"},[i("label",{attrs:{for:"tag"}},[t._v("任務備註：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputItem.taskTag,expression:"inputItem.taskTag"}],staticClass:"task",attrs:{id:"tag",type:"text",placeholder:"例如：aaa,bbb"},domProps:{value:t.inputItem.taskTag},on:{input:function(e){e.target.composing||t.$set(t.inputItem,"taskTag",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"trashCan"},[i("i",{staticClass:"fa-solid fa-trash-can fa-lg",on:{click:t.removeTask}})])])};u._withStripped=!0;var d=i(207);i(239);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={components:{DatePicker:d.a},filters:{},props:{item:{type:Object,default:{}},index:{type:Number,default:1}},data:function(){return{inputItem:{},defaultItem:{},isInputData:!1,routeName:this.$route.query.name}},computed:p({},Object(a.c)([])),watch:{item:{deep:!0,handler:function(t){var e=JSON.stringify(this.item);e!==JSON.stringify(this.inputItem)&&(this.inputItem=JSON.parse(e))}},inputItem:{deep:!0,handler:function(t){var e=JSON.stringify(t),i=JSON.stringify(this.defaultItem);this.isInputData=i!==e,this.$emit("change-item",{item:this.inputItem,dataChange:this.isInputData,index:this.index})}}},created:function(){},mounted:function(){this.inputItem=JSON.parse(JSON.stringify(this.item)),this.defaultItem=JSON.parse(JSON.stringify(this.item))},updated:function(){},destroyed:function(){},methods:p(p(p({},Object(a.b)({})),Object(a.d)({})),{},{removeTask:function(){this.$emit("remove",{item:this.inputItem,index:this.index})}})},m=i(8),h=Object(m.a)(f,u,[],!1,null,"34e2945f",null);function v(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}h.options.__file="components/Add_page/AddTask.vue";var k={components:{AddTask:h.exports},filters:{},props:{},data:function(){return{routeName:this.$route.query.name,isInputChange:!1,route:!1,type:{work:"work",home:"home",friend:"friend",other:"other"},addTodoList:[]}},watch:{},computed:g(g({},Object(a.c)(["itemsID","todos","itemsNotDone"])),Object(a.e)(["editTodoList"])),mounted:function(){var t=this;if("Add"!==this.routeName&&"edit"===this.routeName){var e=JSON.parse(JSON.stringify(this.itemsNotDone)),i=JSON.parse(JSON.stringify(this.editTodoList)),n=[];e.forEach((function(t){i.includes(t.id)&&n.push(t)})),this.addTodoList=n}else if("Add"!==this.routeName){this.route=!0;var a=JSON.parse(JSON.stringify(this.todos)).filter((function(e){return e.id===t.routeName}));this.addTodoList=a}else this.addTask()},methods:g(g(g({},Object(a.b)({})),Object(a.d)({editTask:"editTask"})),{},{addTask:function(){this.addTodoList.push({taskName:"",taskType:"",expDate:"",isDone:!1,id:"",taskTag:""})},removeTodo:function(t){var e=JSON.parse(JSON.stringify(this.addTodoList));if("Add"!==this.routeName&&"edit"===this.routeName){var i=JSON.parse(JSON.stringify(this.editTodoList)),n=[],a=i.indexOf(t.item.id);n.push(i[a]),e.splice(t.index,1),this.addTodoList=e,this.$store.commit("removeTask",n)}else if("Add"===this.routeName)e.splice(t.index,1),this.addTodoList=e;else{var r=[];r.push(this.routeName),this.$store.commit("removeTask",r),history.go(-1)}},sendTodos:function(){!0===this.addTodoList.every((function(t){if(""!==t.taskName)if(""!==t.taskType){if(""!==t.expDate)return""===t.taskTag?void o.a.fire("請輸入任務備註"):t;o.a.fire("請選擇完成日期")}else o.a.fire("請選擇任務分類");else o.a.fire("請輸入任務名稱")}))&&(this.isInputChange=!1,this.$emit("input-data-change",this.isInputChange),this.$store.commit("editTask",v(this.addTodoList)),"Add"===this.routeName?(o.a.fire("已送出，可到 Todo page 查看"),this.addTodoList=[]):(o.a.fire({position:"center",icon:"success",title:"修改完成",showConfirmButton:!1,timer:1500}),history.go(-1)))},changeItem:function(t){var e=JSON.parse(JSON.stringify(this.addTodoList));if(!0===t.dataChange)if(""===t.item.id)e[t.index]=t.item,this.addTodoList=e,this.isInputChange=!0,this.$emit("input-data-change",this.isInputChange);else{var i={};e.forEach((function(t){i[t.id]=t})),i[t.item.id]=t.item;var n=Object.values(i);this.addTodoList=n,this.isInputChange=!0,this.$emit("input-data-change",this.isInputChange)}else this.isInputChange=!1,this.$emit("input-data-change",this.isInputChange)}})},_=Object(m.a)(k,r,[],!1,null,null,null);function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function T(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?j(Object(i),!0).forEach((function(e){N(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function N(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}_.options.__file="components/Add_page/AddTaskContainer.vue";var w={components:{AddTaskContainer:_.exports},filters:{},props:{},data:function(){return{inputStatus:!1}},beforeRouteLeave:function(t,e,i){this.inputStatus?!0===window.confirm("確定要離開嗎,網頁不會保留輸入資訊喔")?i():i(!1):i()},computed:T({},Object(a.c)([])),watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},methods:T(T(T({},Object(a.b)({})),Object(a.d)({})),{},{getStatus:function(t){this.inputStatus=t}})},I=Object(m.a)(w,n,[],!1,null,"6e024c50",null);I.options.__file="components/Add_page/main.vue";e.default=I.exports}}]);