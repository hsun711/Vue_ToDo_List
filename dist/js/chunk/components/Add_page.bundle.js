(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"addPage"}},[e("AddTask")],1)};n._withStripped=!0;var a=r(1),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"addPage"}},[r("div",{attrs:{id:"addTask"}},[r("div",{staticClass:"task"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTask,expression:"inputTask"}],attrs:{id:"task",type:"text",name:"task",placeholder:" New Task "},domProps:{value:t.inputTask},on:{input:function(e){e.target.composing||(t.inputTask=e.target.value)}}})]),t._v(" "),r("div",{attrs:{id:"taskType"}},[r("form",{attrs:{action:"get"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.taskType,expression:"taskType"}],attrs:{id:"type",name:"type"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.taskType=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("\n                        請選擇任務分類\n                    ")]),t._v(" "),r("option",{attrs:{value:"work"}},[t._v("\n                        工作\n                    ")]),t._v(" "),r("option",{attrs:{value:"home"}},[t._v("\n                        家事\n                    ")]),t._v(" "),r("option",{attrs:{value:"friend"}},[t._v("\n                        社交\n                    ")]),t._v(" "),r("option",{attrs:{value:"other"}},[t._v("\n                        其他\n                    ")])])])]),t._v(" "),r("date-picker",{attrs:{placeholder:"完成日期","value-type":"format"},model:{value:t.expDate,callback:function(e){t.expDate=e},expression:"expDate"}},[t._v("\n            "+t._s(t.expDate)+"\n        ")]),t._v(" "),r("i",{staticClass:"fa-regular fa-square-plus fa-2x",on:{click:t.addTask}})],1),t._v(" "),r("div",{staticClass:"taskArea"},[r("ul",t._l(t.tasksArr,(function(e,n){return r("li",{key:e.taskName},[r("h3",[t._v(t._s(e.taskName))]),t._v(" "),r("p",[t._v(t._s(e.expDate))]),t._v(" "),r("i",{staticClass:"fa-solid fa-trash-can",on:{click:function(e){return t.removeTask(n)}}})])})),0)]),t._v(" "),r("div",{staticClass:"addtodoBtn"},[r("button",{on:{click:t.sendTodos}},[t._v("\n            送出\n        ")])])])};o._withStripped=!0;var i=r(71),s=(r(103),r(6)),c=r(364),u=r(10),p=r.n(u);function l(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={components:{DatePicker:i.a},filters:{},props:{},data:function(){return{titleName:"",inputTask:"",tasksArr:[],isChange:!1,changeTask:"",taskType:"",expDate:""}},computed:v({},Object(a.c)([])),watch:{},created:function(){},mounted:function(){s.b.get("todos")||s.b.set("todos",JSON.stringify([]))},updated:function(){},destroyed:function(){},methods:v(v(v({},Object(a.b)({})),Object(a.d)({})),{},{addTask:function(){var t=Object(c.a)();""!==this.inputTask?""!==this.taskType?""!==this.expDate?(this.tasksArr.push({taskName:this.inputTask,taskType:this.taskType,expDate:this.expDate,isDone:!1,id:t}),this.inputTask="",this.taskType="",this.expDate=""):p.a.fire("請選擇到期日"):p.a.fire("請選擇任務分類"):p.a.fire("請輸入任務名稱")},removeTask:function(t){this.tasksArr.splice(t,1)},sendTodos:function(){if(this.tasksArr.length<1)p.a.fire("請輸入任務");else{var t=JSON.parse(s.b.get("todos"));t.push.apply(t,l(this.tasksArr)),s.b.set("todos",JSON.stringify(t)),p.a.fire("已送出任務清單，可到 Todo page 查看"),this.tasksArr=""}}})},m=r(8),k=Object(m.a)(y,o,[],!1,null,null,null);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}k.options.__file="components/Add_page/AddTask.vue";var _={components:{AddTask:k.exports},filters:{},props:{},data:function(){return{}},computed:h({},Object(a.c)([])),watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},methods:h(h({},Object(a.b)({})),Object(a.d)({}))},j=Object(m.a)(_,n,[],!1,null,"6e024c50",null);j.options.__file="components/Add_page/main.vue";e.default=j.exports}}]);