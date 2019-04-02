(function(t){function e(e){for(var o,i,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0996":function(t,e,n){},"0f7a":function(t,e,n){"use strict";var o=n("0996"),r=n.n(o);r.a},"2b7d":function(t,e,n){"use strict";var o=n("2e71"),r=n.n(o);r.a},"2e71":function(t,e,n){},"3c69":function(t,e,n){},4165:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AddTodo",{attrs:{formTitle:"Add Todo"}}),n("TodosFilter",{attrs:{filterTitle:"Filter todos:"}}),n("Todos")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("div",{staticClass:"add-form"},[n("h1",[t._v(t._s(t.formTitle))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.postTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoTitle,expression:"todoTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.todoTitle},on:{input:function(e){e.target.composing||(t.todoTitle=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Save"}})])])])},u=[],s=n("cebc"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._t("default",[t._v("No Slot Content")])],2)},d=[],l={},f=l,p=(n("f65b"),n("2877")),v=Object(p["a"])(f,c,d,!1,null,"40b0e6b7",null),m=v.exports,T=n("2f62"),b={name:"AddTodo",components:{Container:m},props:{formTitle:String},data:function(){return{todoTitle:""}},methods:Object(s["a"])({},Object(T["b"])(["addTodo"]),{postTodo:function(){this.addTodo(this.todoTitle),this.todoTitle=""}})},h=b,_=(n("0f7a"),Object(p["a"])(h,i,u,!1,null,"5fea2bde",null)),g=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("ul",{staticClass:"todos-list"},t._l(t.allTodos,function(e){return n("li",{key:e._id,staticClass:"todo",class:{"is-done":e.isDone},on:{dblclick:function(n){return t.updateTodo(e)}}},[t._v("\n      "+t._s(e.title)+"\n      "),n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return t.deleteTodo(e._id)}}})])}),0)])},O=[],j={name:"Todos",components:{Container:m},methods:Object(s["a"])({},Object(T["b"])(["getTodos","deleteTodo","updateTodo"])),computed:Object(T["c"])(["allTodos"]),created:function(){this.getTodos()}},x=j,y=(n("2b7d"),Object(p["a"])(x,w,O,!1,null,"24276941",null)),k=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.filterTitle))]),n("select",{on:{change:function(e){return t.todosFilter(e)}}},[n("option",{attrs:{value:"100"}},[t._v("100")]),n("option",{attrs:{value:"50"}},[t._v("50")]),n("option",{attrs:{value:"25"}},[t._v("25")]),n("option",{attrs:{value:"10"}},[t._v("10")]),n("option",{attrs:{value:"5"}},[t._v("5")])])])},R=[],S={name:"TodosFilter",props:{filterTitle:String},methods:Object(T["b"])(["todosFilter"])},F=S,P=(n("e377"),Object(p["a"])(F,C,R,!1,null,"596d0598",null)),$=P.exports,E={name:"app",components:{AddTodo:g,Todos:k,TodosFilter:$}},A=E,M=(n("5c0b"),Object(p["a"])(A,r,a,!1,null,null,null)),D=M.exports,J=(n("20d6"),n("e814")),N=n.n(J),I=(n("96cf"),n("3b8d")),q=n("bc3a"),z=n.n(q),B={todos:[]},G={allTodos:function(t){return t.todos}},H={getTodos:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,z.a.get("/todos");case 3:o=t.sent,n("setTodos",o.data);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),addTodo:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,z.a.post("/todos/add",{title:n});case 3:r=t.sent,o("newTodo",r.data);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,z.a.delete("/todos/delete/".concat(n));case 3:o("removeTodo",n);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),todosFilter:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,n){var o,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,r=N()(n.target.value),t.next=4,z.a.get("/todos?limit=".concat(r));case 4:a=t.sent,o("setTodos",a.data);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,z.a.put("/todos/edit/".concat(n._id));case 3:r=t.sent,o("updTodo",r.data);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},K={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter(function(t){return t._id!==e})},updTodo:function(t,e){var n=t.todos.findIndex(function(t){return t._id===e._id});-1!==n&&t.todos.splice(n,1,e)}},L={state:B,getters:G,actions:H,mutations:K};o["a"].use(T["a"]);var Q=new T["a"].Store({modules:{todos:L}});o["a"].config.productionTip=!1,new o["a"]({store:Q,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},e377:function(t,e,n){"use strict";var o=n("4165"),r=n.n(o);r.a},f65b:function(t,e,n){"use strict";var o=n("3c69"),r=n.n(o);r.a}});
//# sourceMappingURL=app.cd58b13b.js.map